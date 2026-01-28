---
title: "Svelte 5 Rundown: The Runes Era of Web Reactivity (2025)"
metaTitle: "Svelte 5: Features & Changes Rundown"
excerpt: "Svelte 5 changes everything. The new 'Runes' API ($state, $derived) brings explicit, fine-grained reactivity that rivals SolidJS and Vue. Here's what you need to know about the future of Svelte."
category: "Digital Growth"
author: "Devstract Team"
publishedAt: "2025-12-11"
readTime: "60 min read"
image: "/media/blog-images/svelte-5.png"
image_alt: "Svelte 5 Runes Reactivity Diagram"
slug: "svelte-5-rundown"
tags:
  [
    "UI Frameworks",
    "Svelte 5",
    "Runes API",
    "Reactivity",
    "Frontend Development",
    "Web Performance",
    "Compiler",
  ]
bottom_cta:
  title: "Elevate Your User Experience?"
  description: "Great software needs great design. We implement intuitive, accessible, and engaging user interfaces."
  button_text: "Design with Us"
  url: "/contact-us"
---

# Svelte 5 Rundown: The Runes Era of Web Reactivity (2025)

Svelte was originally known as the "Disappearing Framework." It compiled your components into vanilla JavaScript with no runtime, and the reactivity felt like _magic_: simply type `let count = 0; count++;` and the UI updated.

But magic has limits. As applications grew in complexity, developers hit walls: hard-to-share reactive state, confusing rules around the `$:` label, and opaque dependency tracking.

Svelte 5 solves this by introducing **Runes**, a new explicit reactivity system. It feels like SolidJS Signals but retains Svelte's elegant syntax. This guide explores everything you need to know about Svelte 5, from the fundamental changes in the reactivity model to migration strategies.

---

## Introduction: The Evolution of Svelte

Before diving into Svelte 5's revolutionary changes, it's worth understanding how we got here. Svelte's journey represents one of the most interesting evolutionary paths in frontend framework history.

### The Birth of Svelte (2016)

Rich Harris created Svelte as a response to the perceived complexity of React and Vue. His insight was radical: what if the framework did its work at compile time rather than runtime? Instead of shipping a framework runtime to the browser, Svelte would compile your components into optimized vanilla JavaScript.

This approach offered several advantages:

- **Smaller bundle sizes**: No framework runtime to ship
- **Better performance**: No virtual DOM diffing
- **Simpler mental model**: Variables are reactive by default

### Svelte 3: The Breakthrough (2019)

Svelte 3 was the version that put Svelte on the map. It introduced the declarative reactivity model that defined Svelte:

```svelte
<script>
    let count = 0;
    $: doubled = count * 2;

    function increment() {
        count++;
    }
</script>

<button on:click={increment}>
    {count} x 2 = {doubled}
</button>
```

The `$:` label was borrowed from JavaScript's labeled statement syntax and repurposed as a reactivity marker. Any statement preceded by `$:` would re-run whenever its dependencies changed.

### The Problems That Emerged

As Svelte adoption grew, patterns emerged that revealed limitations in the magic:

**1. File Scoping**: Reactivity was scoped to `.svelte` files. Creating a reactive store in a `.js` file required a completely different API (the store contract with `set`, `subscribe`, and optionally `update`).

**2. Hidden Invalidation**: Under the hood, Svelte compiled `count++` into `$$invalidate(0, count++)`. This worked well but made the actual reactivity mechanism opaque to developers.

**3. `$:` Ambiguity**: The reactive statement had confusing semantics. Was it running because `count` changed? Was it caching its result? Did the order of statements matter?

**4. Stale Closure Bugs**: In certain scenarios, particularly with callbacks and timers, the "magical" reactivity could lead to stale closures—where code referenced outdated values.

**5. TypeScript Pain Points**: The magic made TypeScript integration challenging. TypeScript couldn't understand that `$:` statements had special semantics.

### The Signals Revolution

Meanwhile, other frameworks were exploring a new paradigm: signals. SolidJS popularized fine-grained reactive primitives:

```javascript
const [count, setCount] = createSignal(0);
const doubled = () => count() * 2;
```

Vue 3's Composition API offered similar explicit reactivity:

```javascript
const count = ref(0);
const doubled = computed(() => count.value * 2);
```

The industry was converging on explicit, function-based reactivity. And Svelte took notice.

---

## Part 1: The Old World (Svelte 4)

Before understanding what changed, let's thoroughly examine how Svelte 4 reactivity worked.

### Basic Reactivity

```svelte
<script>
    let count = 0;
    $: doubled = count * 2; // Reactive statement
</script>

<button on:click={() => count++}>
    {count} x 2 = {doubled}
</button>
```

**How it worked under the hood:**

When Svelte compiled this component, it would:

1. Transform `count++` into `$$invalidate('count', count++)`
2. Track that `doubled` depends on `count`
3. Generate code to recompute `doubled` whenever `count` is invalidated
4. Update only the DOM nodes that reference `count` or `doubled`

### Reactive Statements

The `$:` label could be used for more than derived values:

```svelte
<script>
    let count = 0;

    // Derived value
    $: doubled = count * 2;

    // Side effect
    $: console.log('Count changed:', count);

    // Conditional logic
    $: if (count > 10) {
        alert('High count!');
    }

    // Block statement
    $: {
        const isEven = count % 2 === 0;
        console.log(isEven ? 'Even' : 'Odd');
    }
</script>
```

### Stores: Reactivity Outside Components

For state that lived outside components, Svelte provided the store contract:

```javascript
// stores.js
import { writable, derived } from "svelte/store";

export const count = writable(0);
export const doubled = derived(count, ($count) => $count * 2);
```

```svelte
<!-- Component.svelte -->
<script>
    import { count, doubled } from './stores.js';
</script>

<button on:click={() => $count++}>
    {$count} x 2 = {$doubled}
</button>
```

The `$` prefix in components was syntactic sugar for auto-subscribing to stores. It worked, but introduced a completely different API from component-level reactivity.

### The Problems in Practice

**Confusing `$:` Behavior:**

```svelte
<script>
    let a = 1;
    let b = 2;

    // This runs when a OR b changes
    $: sum = a + b;

    // But what about this?
    $: {
        console.log(a); // Logs when a changes
        // b is never read, so changes to b don't trigger this
    }
</script>
```

The dependency tracking was implicit—based on what variables were actually read during execution. This could lead to subtle bugs.

**Stale Closure Problem:**

```svelte
<script>
    let count = 0;

    function createInterval() {
        setInterval(() => {
            console.log(count); // This might log stale values!
        }, 1000);
    }

    createInterval();
</script>
```

The closure captured the initial value of `count`, not a reactive reference to it.

**State Sharing Complexity:**

```javascript
// Trying to share state between files without stores
// file1.js
export let sharedState = 0;
sharedState++; // This won't trigger reactivity in components!
```

---

## Part 2: The New World (Svelte 5 Runes)

Svelte 5 introduces **Runes**—a set of universal primitives for reactivity that work everywhere: in components, in `.js` files, in `.ts` files.

### What Are Runes?

Runes are special function-like symbols that start with `$`. They're not actual functions—they're compiler instructions that transform your code. The Svelte compiler recognizes these symbols and generates the appropriate reactive code.

The core runes are:

- `$state()` - Create reactive state
- `$derived()` - Create computed values
- `$effect()` - Run side effects
- `$props()` - Declare component props
- `$bindable()` - Mark props as bindable

### Basic Runes Example

```svelte
<script>
    let count = $state(0);
    let doubled = $derived(count * 2);
</script>

<button onclick={() => count++}>
    {count} x 2 = {doubled}
</button>
```

**`$state()`**: Creates mutable, reactive state. When you update the value, anything depending on it automatically updates.

**`$derived()`**: Creates computed state that depends on other state (like Vue's `computed` or React's `useMemo`).

### The Killer Feature: Universal Reactivity

**These work in regular `.js/.ts` files.**

```javascript
// counter.js
export function createCounter() {
  let count = $state(0);
  let doubled = $derived(count * 2);

  function increment() {
    count++;
  }

  return {
    get count() {
      return count;
    },
    get doubled() {
      return doubled;
    },
    increment,
  };
}
```

```svelte
<!-- App.svelte -->
<script>
    import { createCounter } from './counter.js';

    const counter = createCounter();
</script>

<button onclick={() => counter.increment()}>
    {counter.count} x 2 = {counter.doubled}
</button>
```

You can now create a `stores/counter.js` file, export `$state(0)`, and import it anywhere. Svelte components subscribing to it will react to changes. This eliminates the need for the separate store API in most cases.

### Deep Reactivity with $state

One of the most powerful aspects of `$state` is its handling of objects and arrays:

```svelte
<script>
    let todos = $state([
        { id: 1, text: 'Learn Svelte 5', done: false },
        { id: 2, text: 'Build something', done: false }
    ]);

    function toggle(id) {
        const todo = todos.find(t => t.id === id);
        if (todo) {
            todo.done = !todo.done; // This works! Deep reactivity!
        }
    }

    function addTodo(text) {
        todos.push({ id: Date.now(), text, done: false }); // This works too!
    }
</script>
```

In Svelte 4, you had to reassign the entire array to trigger reactivity: `todos = [...todos, newTodo]`. In Svelte 5, you can mutate directly because `$state` creates a deeply reactive proxy.

### $derived for Computed Values

`$derived` is for values that are computed from other reactive values:

```svelte
<script>
    let todos = $state([
        { id: 1, text: 'Learn Svelte 5', done: true },
        { id: 2, text: 'Build something', done: false }
    ]);

    let completedCount = $derived(todos.filter(t => t.done).length);
    let remainingCount = $derived(todos.length - completedCount);

    let status = $derived(
        remainingCount === 0
            ? 'All done!'
            : `${remainingCount} remaining`
    );
</script>

<p>{status}</p>
```

### $derived.by for Complex Derivations

For derived values that require more complex logic, use `$derived.by`:

```svelte
<script>
    let todos = $state([]);

    let stats = $derived.by(() => {
        const total = todos.length;
        const completed = todos.filter(t => t.done).length;
        const remaining = total - completed;
        const percentComplete = total > 0 ? (completed / total) * 100 : 0;

        return {
            total,
            completed,
            remaining,
            percentComplete
        };
    });
</script>

<div>
    <p>Total: {stats.total}</p>
    <p>Completed: {stats.completed}</p>
    <p>Progress: {stats.percentComplete.toFixed(1)}%</p>
</div>
```

---

## Part 3: Fine-Grained Reactivity

Svelte 4 had component-level reactivity. If any state in a component changed, the entire component re-rendered (though Svelte's compiled output was smart about only updating affected DOM nodes).

Svelte 5 tracks dependencies at the **expression level**.

### How Fine-Grained Reactivity Works

Consider this component:

```svelte
<script>
    let firstName = $state('John');
    let lastName = $state('Doe');
    let age = $state(30);

    let fullName = $derived(`${firstName} ${lastName}`);
</script>

<p>Name: {fullName}</p>
<p>Age: {age}</p>
```

When `firstName` changes:

1. `fullName` is recomputed (it depends on `firstName`)
2. The first `<p>` tag updates
3. The second `<p>` tag is **not** touched (it has no dependency on `firstName` or `fullName`)

This is similar to SolidJS's approach and represents a massive performance win for complex applications with many independent pieces of state.

### Comparing to React

In React:

```jsx
function App() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [age, setAge] = useState(30);

  const fullName = `${firstName} ${lastName}`;

  return (
    <>
      <p>Name: {fullName}</p>
      <p>Age: {age}</p>
    </>
  );
}
```

When `firstName` changes:

1. The entire function component re-runs
2. All derived values are recomputed
3. React's virtual DOM diffing determines what DOM updates are needed

Svelte 5's fine-grained approach skips the "re-run everything" step entirely.

### Implications for Performance

Fine-grained reactivity means:

- **Fewer computations**: Only affected derivations recalculate
- **Smaller update scope**: Only affected DOM nodes are touched
- **Better scaling**: Adding more state doesn't proportionally slow updates

For most applications, this difference is academic—modern devices handle either approach easily. But for complex, highly interactive apps (think spreadsheets, design tools, real-time dashboards), fine-grained reactivity provides measurable benefits.

---

## Part 4: Effects ($effect)

`$effect` is the new way to run side-effects, replacing the `$:` syntax for statements that don't derive values.

### Basic Effects

```javascript
$effect(() => {
  console.log(`Count is now: ${count}`);
  // Automatically tracks `count` dependency
});
```

**No dependency arrays.** Svelte infers them by tracking which reactive values are read during the effect's execution.

### Effect Cleanup

Effects can return a cleanup function that runs before the effect re-runs and when the component is destroyed:

```javascript
$effect(() => {
  const interval = setInterval(() => {
    console.log(`Count: ${count}`);
  }, 1000);

  // Cleanup function
  return () => {
    clearInterval(interval);
  };
});
```

### Comparing to React's useEffect

| Aspect         | React useEffect | Svelte $effect  |
| -------------- | --------------- | --------------- |
| Dependencies   | Manual array    | Auto-tracked    |
| Stale closures | Common issue    | Not possible    |
| Initial run    | After paint     | Before paint    |
| Cleanup        | Return function | Return function |
| Async          | Complex         | Straightforward |

### Effect Timing

By default, `$effect` runs synchronously before DOM updates. For effects that need to run after the DOM updates:

```javascript
import { tick } from "svelte";

$effect(() => {
  // This section runs before DOM update

  tick().then(() => {
    // This runs after DOM update
    const element = document.getElementById("my-element");
    console.log("Height:", element.offsetHeight);
  });
});
```

Or use `$effect.pre` for effects that specifically run before DOM updates (useful for reading layout before and after).

### Avoiding Effect Loops

Effects that modify their own dependencies can create infinite loops:

```javascript
// BAD - infinite loop!
$effect(() => {
  count = count + 1; // Reading and writing count
});
```

Svelte will warn you about such patterns during development.

---

## Part 5: Props with Runes

Component props get a complete overhaul with the `$props` rune.

### Basic Props

```svelte
<!-- Child.svelte -->
<script>
    let { name, age = 18 } = $props();
</script>

<p>{name} is {age} years old</p>
```

```svelte
<!-- Parent.svelte -->
<script>
    import Child from './Child.svelte';
</script>

<Child name="Alice" age={25} />
<Child name="Bob" /> <!-- uses default age of 18 -->
```

### TypeScript Integration

Runes work beautifully with TypeScript:

```svelte
<script lang="ts">
    interface Props {
        name: string;
        age?: number;
        onUpdate?: (value: number) => void;
    }

    let { name, age = 18, onUpdate }: Props = $props();
</script>
```

### Rest Props

Collecting remaining props:

```svelte
<script lang="ts">
    interface Props {
        variant: 'primary' | 'secondary';
        [key: string]: any;
    }

    let { variant, ...restProps }: Props = $props();
</script>

<button class={variant} {...restProps}>
    <slot />
</button>
```

### Bindable Props

For two-way binding:

```svelte
<!-- TextInput.svelte -->
<script lang="ts">
    let { value = $bindable() }: { value: string } = $props();
</script>

<input bind:value />
```

```svelte
<!-- Parent.svelte -->
<script>
    import TextInput from './TextInput.svelte';
    let name = $state('');
</script>

<TextInput bind:value={name} />
<p>You typed: {name}</p>
```

The `$bindable()` rune marks a prop as bindable, enabling the `bind:` syntax from the parent.

---

## Part 6: Migration from Svelte 4

Svelte 5 is backward compatible. Your Svelte 4 components will still work. The team recommends a gradual migration.

### Migration Strategy

1. **Upgrade to Svelte 5**: Update your dependencies
2. **Write new components with Runes**: Use the new syntax for new features
3. **Migrate existing components as needed**: Refactor when touching old code

### Automated Migration

Svelte provides a migration command:

```bash
npx svelte-migrate@latest svelte-5
```

This will:

- Update your `package.json`
- Migrate most syntax automatically
- Flag cases requiring manual review

### Common Migration Patterns

**Reactive Declarations → $derived**

Before:

```svelte
<script>
    export let items;
    $: total = items.length;
    $: doubled = total * 2;
</script>
```

After:

```svelte
<script>
    let { items } = $props();
    let total = $derived(items.length);
    let doubled = $derived(total * 2);
</script>
```

**Reactive Statements (Side Effects) → $effect**

Before:

```svelte
<script>
    let count = 0;
    $: console.log('Count changed:', count);
    $: document.title = `Count: ${count}`;
</script>
```

After:

```svelte
<script>
    let count = $state(0);

    $effect(() => {
        console.log('Count changed:', count);
    });

    $effect(() => {
        document.title = `Count: ${count}`;
    });
</script>
```

**Stores → $state in Modules**

Before:

```javascript
// stores.js
import { writable, derived } from "svelte/store";

export const count = writable(0);
export const doubled = derived(count, ($c) => $c * 2);
```

After:

```javascript
// state.svelte.js (note the .svelte.js extension)
export const count = $state(0);
export const doubled = $derived(count * 2);
```

Or with a factory pattern:

```javascript
// counter.svelte.js
export function createCounter(initial = 0) {
  let count = $state(initial);

  return {
    get count() {
      return count;
    },
    get doubled() {
      return count * 2;
    },
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    reset() {
      count = initial;
    },
  };
}
```

### When to Use Stores vs. Runes

Stores aren't deprecated—they still have valid use cases:

**Use Stores When:**

- You need the store contract for third-party integrations
- You want explicit subscription/unsubscription control
- You're working with a codebase that heavily uses them

**Use Runes When:**

- Starting new projects
- Creating shared state between components
- You want the simpler, more intuitive API

---

## Part 7: Advanced Patterns

### Creating Class-Based Stores

Runes work inside classes:

```javascript
// TodoStore.svelte.js
export class TodoStore {
  todos = $state([]);

  get count() {
    return this.todos.length;
  }

  get completed() {
    return this.todos.filter((t) => t.done);
  }

  get remaining() {
    return this.todos.filter((t) => !t.done);
  }

  add(text) {
    this.todos.push({
      id: crypto.randomUUID(),
      text,
      done: false,
      createdAt: new Date(),
    });
  }

  toggle(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.done = !todo.done;
    }
  }

  remove(id) {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  clearCompleted() {
    this.todos = this.todos.filter((t) => !t.done);
  }
}

// Singleton instance
export const todoStore = new TodoStore();
```

```svelte
<!-- TodoApp.svelte -->
<script>
    import { todoStore } from './TodoStore.svelte.js';

    let newTodoText = $state('');

    function addTodo() {
        if (newTodoText.trim()) {
            todoStore.add(newTodoText);
            newTodoText = '';
        }
    }
</script>

<form onsubmit|preventDefault={addTodo}>
    <input bind:value={newTodoText} placeholder="What needs to be done?" />
    <button type="submit">Add</button>
</form>

<ul>
    {#each todoStore.todos as todo}
        <li>
            <input
                type="checkbox"
                checked={todo.done}
                onchange={() => todoStore.toggle(todo.id)}
            />
            <span class:done={todo.done}>{todo.text}</span>
            <button onclick={() => todoStore.remove(todo.id)}>×</button>
        </li>
    {/each}
</ul>

<footer>
    {todoStore.remaining.length} items left
    <button onclick={() => todoStore.clearCompleted()}>
        Clear completed ({todoStore.completed.length})
    </button>
</footer>

<style>
    .done {
        text-decoration: line-through;
        color: #888;
    }
</style>
```

### Composable State Functions

Create reusable reactive logic:

```javascript
// useLocalStorage.svelte.js
export function useLocalStorage(key, initialValue) {
  // Initialize from localStorage or use initial value
  const stored = localStorage.getItem(key);
  let value = $state(stored ? JSON.parse(stored) : initialValue);

  // Sync to localStorage whenever value changes
  $effect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  });

  return {
    get value() {
      return value;
    },
    set value(v) {
      value = v;
    },
  };
}
```

```svelte
<script>
    import { useLocalStorage } from './useLocalStorage.svelte.js';

    const theme = useLocalStorage('theme', 'light');
</script>

<button onclick={() => theme.value = theme.value === 'light' ? 'dark' : 'light'}>
    Current theme: {theme.value}
</button>
```

### Debouncing and Throttling

```javascript
// useDebouncedValue.svelte.js
export function useDebouncedValue(getValue, delay = 300) {
  let debouncedValue = $state(getValue());
  let timeoutId;

  $effect(() => {
    const value = getValue();
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      debouncedValue = value;
    }, delay);

    return () => clearTimeout(timeoutId);
  });

  return {
    get value() {
      return debouncedValue;
    },
  };
}
```

```svelte
<script>
    import { useDebouncedValue } from './useDebouncedValue.svelte.js';

    let searchInput = $state('');
    const debouncedSearch = useDebouncedValue(() => searchInput, 500);

    // Use debouncedSearch.value for API calls
    $effect(() => {
        if (debouncedSearch.value) {
            fetchSearchResults(debouncedSearch.value);
        }
    });
</script>

<input bind:value={searchInput} placeholder="Search..." />
<p>Searching for: {debouncedSearch.value}</p>
```

### Async State Management

```javascript
// useAsync.svelte.js
export function useAsync(asyncFn) {
  let data = $state(null);
  let error = $state(null);
  let loading = $state(false);

  async function execute(...args) {
    loading = true;
    error = null;
    try {
      data = await asyncFn(...args);
    } catch (e) {
      error = e;
      data = null;
    } finally {
      loading = false;
    }
  }

  return {
    get data() {
      return data;
    },
    get error() {
      return error;
    },
    get loading() {
      return loading;
    },
    execute,
  };
}
```

```svelte
<script>
    import { useAsync } from './useAsync.svelte.js';

    const userFetch = useAsync(async (id) => {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
    });

    let userId = $state('1');

    // Refetch when userId changes
    $effect(() => {
        userFetch.execute(userId);
    });
</script>

<input bind:value={userId} placeholder="User ID" />

{#if userFetch.loading}
    <p>Loading...</p>
{:else if userFetch.error}
    <p>Error: {userFetch.error.message}</p>
{:else if userFetch.data}
    <pre>{JSON.stringify(userFetch.data, null, 2)}</pre>
{/if}
```

---

## Part 8: Performance Optimization

### Avoiding Over-Reactivity

Not everything needs to be reactive:

```svelte
<script>
    // This is reactive - will cause re-renders when changed
    let userPreferences = $state({ theme: 'dark' });

    // This is NOT reactive - just a plain constant
    // Use when the value never changes
    const CONFIG = {
        apiUrl: 'https://api.example.com',
        maxRetries: 3
    };

    // This is NOT reactive - regular let
    // Use for values that change but don't need to trigger UI updates
    let requestId = 0;
</script>
```

### Lazy State Initialization

For expensive initial values:

```svelte
<script>
    // BAD: computeExpensiveValue() runs on every import
    let value = $state(computeExpensiveValue());

    // GOOD: Lazy initialization
    let value = $state();

    $effect(() => {
        // This only runs once when the component mounts
        if (value === undefined) {
            value = computeExpensiveValue();
        }
    });
</script>
```

### State Snapshots for Performance

When you need to pass state to functions that shouldn't trigger reactivity:

```svelte
<script>
    import { $state } from 'svelte';

    let items = $state([1, 2, 3, 4, 5]);

    // When you need a non-reactive copy
    function processItems() {
        // $state.snapshot() creates a plain, non-reactive copy
        const snapshot = $state.snapshot(items);
        // Operations on snapshot won't trigger reactivity
        return heavyComputation(snapshot);
    }
</script>
```

### Memoization Patterns

For expensive derived values:

```svelte
<script>
    let data = $state([/* large dataset */]);
    let filter = $state('');

    // This recomputes whenever data OR filter changes
    // For expensive computations, this might be too often
    let filtered = $derived(
        data.filter(item => item.name.includes(filter))
    );

    // For more control, use $derived.by with manual memoization
    let cache = { filter: null, result: null };
    let memoizedFiltered = $derived.by(() => {
        if (cache.filter !== filter) {
            cache.filter = filter;
            cache.result = data.filter(item => item.name.includes(filter));
        }
        return cache.result;
    });
</script>
```

---

## Part 9: SvelteKit Integration

Runes work seamlessly with SvelteKit, but there are some specific patterns to understand.

### Page Data with Runes

```svelte
<!-- +page.svelte -->
<script>
    let { data } = $props(); // data comes from +page.js/+page.server.js

    // Create local reactive state from loaded data
    let items = $state(data.items);

    // Sync with server data when it changes (navigation)
    $effect(() => {
        items = data.items;
    });
</script>
```

### Form Actions with Runes

```svelte
<!-- +page.svelte -->
<script>
    import { enhance } from '$app/forms';

    let { form } = $props(); // Form action result
    let isSubmitting = $state(false);
</script>

<form
    method="POST"
    action="?/create"
    use:enhance={() => {
        isSubmitting = true;
        return async ({ update }) => {
            await update();
            isSubmitting = false;
        };
    }}
>
    <input name="title" required />
    <button disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create'}
    </button>
</form>

{#if form?.error}
    <p class="error">{form.error}</p>
{/if}
```

### Shared State in SvelteKit

```javascript
// lib/stores/cartStore.svelte.js
class CartStore {
  items = $state([]);

  get count() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  get total() {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  addItem(product) {
    const existing = this.items.find((i) => i.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  removeItem(id) {
    this.items = this.items.filter((i) => i.id !== id);
  }
}

export const cart = new CartStore();
```

**Note**: On the server (SSR), this singleton is shared across all requests. For user-specific state, use context or load functions instead.

---

## Part 10: Testing with Runes

### Unit Testing Reactive Logic

```javascript
// counter.svelte.js
export function createCounter(initial = 0) {
  let count = $state(initial);

  return {
    get count() {
      return count;
    },
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
  };
}
```

```javascript
// counter.test.js
import { describe, it, expect } from "vitest";
import { flushSync } from "svelte";
import { createCounter } from "./counter.svelte.js";

describe("createCounter", () => {
  it("should initialize with given value", () => {
    const counter = createCounter(5);
    expect(counter.count).toBe(5);
  });

  it("should increment", () => {
    const counter = createCounter(0);
    counter.increment();
    flushSync(); // Ensure reactive updates are processed
    expect(counter.count).toBe(1);
  });

  it("should decrement", () => {
    const counter = createCounter(5);
    counter.decrement();
    flushSync();
    expect(counter.count).toBe(4);
  });
});
```

### Component Testing

```javascript
// Button.test.js
import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/svelte";
import Button from "./Button.svelte";

describe("Button", () => {
  it("renders with correct text", () => {
    const { getByRole } = render(Button, { props: { label: "Click me" } });
    expect(getByRole("button")).toHaveTextContent("Click me");
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    const { getByRole } = render(Button, {
      props: { label: "Click", onClick },
    });

    await fireEvent.click(getByRole("button"));

    expect(onClick).toHaveBeenCalledOnce();
  });
});
```

---

## Part 11: Best Practices

### Naming Conventions

```javascript
// Reactive state: prefixed or descriptive nouns
let count = $state(0);
let isLoading = $state(false);
let selectedItems = $state([]);

// Derived values: descriptive of what they compute
let totalCount = $derived(items.length);
let hasSelection = $derived(selectedItems.length > 0);
let formattedDate = $derived(formatDate(date));

// Effects: at the end of the script, grouped logically
$effect(() => {
  // DOM effects
});

$effect(() => {
  // External sync effects
});
```

### File Organization

```
src/
├── lib/
│   ├── stores/
│   │   ├── cartStore.svelte.js     # Rune-based stores
│   │   └── authStore.svelte.js
│   ├── composables/
│   │   ├── useLocalStorage.svelte.js
│   │   └── useMediaQuery.svelte.js
│   └── utils/
│       └── helpers.js              # Regular non-reactive utilities
└── routes/
    └── +page.svelte
```

### When to Use What

| Need                        | Solution                 |
| --------------------------- | ------------------------ |
| Local component state       | `$state()`               |
| Computed value from state   | `$derived()`             |
| Side effect on state change | `$effect()`              |
| Shared state (same page)    | Context API              |
| Shared state (cross-route)  | Module-level `$state`    |
| Complex shared state        | Class with `$state`      |
| Server-loadable state       | SvelteKit load functions |

---

## Conclusion

Svelte 5 is Svelte growing up.
It trades some "magic" for explicit, powerful primitives.
If you loved Svelte for its simplicity, you will love Svelte 5 for its predictability.
The future of web UI is fine-grained reactivity, and Svelte is now a first-class citizen.

### Key Takeaways

1. **Runes are universal**: They work in components and regular JS/TS files
2. **Explicit is better**: Dependencies are tracked, not guessed
3. **Fine-grained updates**: Only what needs to update, updates
4. **Backward compatible**: Migrate at your pace
5. **TypeScript friendly**: First-class type inference

### Looking Forward

The Svelte team's commitment to developer experience continues. Future releases will likely bring:

- Enhanced debugging tools for runes
- Better error messages and warnings
- More performance optimizations
- Expanded ecosystem support

The introduction of runes represents the most significant change in Svelte since version 3. It brings Svelte in line with modern reactivity patterns while maintaining the framework's signature elegance and small runtime footprint.

Whether you're building a simple personal project or a complex enterprise application, Svelte 5's runes provide the tools you need for clean, maintainable, and performant code.

The era of magical reactivity is evolving into an era of explicit, controllable, and universally portable state management. Welcome to the Runes Era.

---

## Additional Resources

- **Svelte 5 Documentation**: https://svelte.dev/docs
- **Svelte Tutorial**: https://learn.svelte.dev
- **Svelte RFC for Runes**: Original design document
- **SvelteKit Documentation**: https://kit.svelte.dev
- **Svelte Discord**: Community support and discussion

---

## Appendix: Quick Reference

### Core Runes

```javascript
// State
let value = $state(initialValue);

// State with deep reactivity
let obj = $state({ nested: { value: 1 } });

// Derived value
let derived = $derived(expression);

// Derived with complex logic
let derived = $derived.by(() => {
  // Complex computation
  return result;
});

// Effects
$effect(() => {
  // Runs when dependencies change
  return () => {
    // Optional cleanup
  };
});

// Props
let { prop1, prop2 = defaultValue } = $props();

// Bindable props
let { value = $bindable() } = $props();
```

### Migration Cheat Sheet

| Svelte 4                        | Svelte 5                         |
| ------------------------------- | -------------------------------- |
| `let x = 0;`                    | `let x = $state(0);`             |
| `$: doubled = x * 2;`           | `let doubled = $derived(x * 2);` |
| `$: console.log(x);`            | `$effect(() => console.log(x));` |
| `export let name;`              | `let { name } = $props();`       |
| `$count` (store auto-subscribe) | Still works!                     |
| `writable(0)`                   | `$state(0)` in .svelte.js        |

### File Extensions

- `.svelte` - Component files (runes work)
- `.svelte.js` - JavaScript with runes
- `.svelte.ts` - TypeScript with runes
- `.js` / `.ts` - Regular files (runes don't work)

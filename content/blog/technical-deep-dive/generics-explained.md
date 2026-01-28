---
title: "TypeScript Generics Explained: Stop Using 'any' (2025)"
excerpt: "Generics allow you to write reusable code without losing type safety. We visualize the 'Box' analogy, explain constraints, and show how to avoid 'any' in sophisticated TypeScript applications."
category: "Technical Deep-Dive"
author: "Devstract Team"
publishedAt: "2025-11-29"
readTime: "45 min read"
image: "/media/blog-images/ts-generics.png"
image_alt: "TypeScript Generics 'Box' Analogy Diagram"
slug: "generics-explained"
tags:
  [
    "TypeScript",
    "Frontend Development",
    "JavaScript",
    "Generics",
    "Type Safety",
    "Software Design Patterns",
    "Programming Fundamentals",
  ]
bottom_cta:
  title: "Need Type-Safe Code?"
  description: "We bring scalability and maintainability to your JavaScript codebases with expert TypeScript engineering."
  button_text: "Improve Code Quality"
  url: "/contact-us"
---

# TypeScript Generics Explained: Stop Using 'any' (2025)

You are writing a function. You want it to work with a String, but also a Number.
So you inevitably type: `function log(value: any) { ... }`

**Stop.**

You just turned off TypeScript. You are effectively writing raw JavaScript, discarding all safety guarantees. The correct answer is **Generics**.

Generics are essentially "Variables for Types." In regular code, functions accept parameters (`x`, `y`) to return a value; in Type code, generics accept parameters (`T`, `U`) to return a Type. In this guide, we will move from `<T>` confusion to mastery, ensuring your code remains flexible yet strict.

---

## Part 1: The "Box" Analogy

Imagine a wrapper function.

```typescript
function wrap(value: any) {
  return { payload: value };
}

const w = wrap("hello");
w.payload.toFixed(); // No error! But crashes at runtime.
```

Because we used `any`, TS doesn't know `payload` is a string. It lets us call number methods on it.

Now with Generics:

```typescript
function wrap<T>(value: T) {
  return { payload: value };
}

const w = wrap("hello");
// w is now { payload: string } automatically
```

TS sees you passed a string. It sets `T = string`. It returns `{ payload: string }`.
It enforces type safety _dynamically_ based on usage.

---

## Part 2: Constraints (`extends`)

Sometimes `T` is too broad. You don't want _anything_. You want _something with a .length property_.

```typescript
function logLength<T>(item: T) {
  console.log(item.length); // Error! T might be a number.
}
```

We constrain it:

```typescript
interface Lengthy {
  length: number;
}

function logLength<T extends Lengthy>(item: T) {
  console.log(item.length); // Safe!
}

logLength("hello"); // OK
logLength([1, 2]); // OK
logLength(123); // Error (Number has no length)
```

---

## Part 3: Real World Examples

### 1. API Response Wrapper

Every backend endpoint returns a standard format.

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  error?: string;
}

interface User {
  id: number;
  name: string;
}
interface Post {
  id: number;
  title: string;
}

// Usage
const userRes: ApiResponse<User> = await fetchUser();
const postRes: ApiResponse<Post> = await fetchPost();

console.log(userRes.data.name); // TS knows this is valid
console.log(postRes.data.name); // TS knows this is INVALID (Post has no name)
```

### 2. React Components

A generic List component.

```tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>(props: ListProps<T>) {
  return <ul>{props.items.map(props.renderItem)}</ul>;
}

// Usage
<List
  items={["a", "b"]}
  renderItem={(item) => <span>{item.toUpperCase()}</span>}
/>;
// item is automatically inferred as string!
```

---

## Part 4: Multiple Generics

You can have `T`, `U`, `V`.

```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const result = merge({ name: "A" }, { age: 20 });
// result is { name: string } & { age: number }
```

**Naming Tip**:
Stop using `T` when it gets complex.
Use `TData`, `TError`, `TProps`.
Calculus uses `x`, but Physicists use `velocity`. Be descriptive.

---

## Conclusion

Generics are the bridge between "Dynamic Code" and "Static Safety".
They allow you to write reusable libraries that don't sacrifice type information.

Next time you type `any`, ask yourself:
"Could I put a `<T>` here instead?"
The answer is usually yes.

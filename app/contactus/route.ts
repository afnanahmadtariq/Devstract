import { NextRequest, NextResponse } from 'next/server';

// Return 410 Gone status for all requests to /contactus
// This tells search engines that this page has been permanently removed
export async function GET(req: NextRequest) {
  return NextResponse.json(
    { 
      error: 'Gone',
      message: 'This page has been permanently removed.' 
    },
    { status: 410 }
  );
}

export async function POST(req: NextRequest) {
  return NextResponse.json(
    { 
      error: 'Gone',
      message: 'This page has been permanently removed.' 
    },
    { status: 410 }
  );
}

export async function PUT(req: NextRequest) {
  return NextResponse.json(
    { 
      error: 'Gone',
      message: 'This page has been permanently removed.' 
    },
    { status: 410 }
  );
}

export async function DELETE(req: NextRequest) {
  return NextResponse.json(
    { 
      error: 'Gone',
      message: 'This page has been permanently removed.' 
    },
    { status: 410 }
  );
}

export async function PATCH(req: NextRequest) {
  return NextResponse.json(
    { 
      error: 'Gone',
      message: 'This page has been permanently removed.' 
    },
    { status: 410 }
  );
}
const user = {
  id: 1,
  name: 'Peter',
};

export const dynamic = 'force-dynamic';

export async function GET() {
  console.log('Memoization/api called');
  return Response.json(user);
}

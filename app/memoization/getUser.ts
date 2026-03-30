type UserT = {
  id: number;
  name: string;
};

export async function getUser(fetchOptions: RequestInit) {
  console.count('Running getUser');
  try {
    const res = await fetch(
      'http://localhost:3000/memoization/api',
      fetchOptions,
    );
    const user: UserT = await res.json();
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

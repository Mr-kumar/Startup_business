export async function sendContact(payload: {
  name: string;
  email: string;
  message?: string;
  phone?: string;
}) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

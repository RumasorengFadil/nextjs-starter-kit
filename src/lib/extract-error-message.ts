export function extractErrorMessage(error: any): string {
  const msg = error?.response?.data?.error.message;

  console.log(error);
  if (!msg) return "Unexpected error occurred";

  if (typeof msg === "string") return msg;

  if (Array.isArray(msg)) return msg.join(", ");

  if (typeof msg === "object") return Object.values(msg).join(", ");

  return "Unexpected error occurred";
}

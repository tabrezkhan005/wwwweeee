type SubmitOptions = {
  subject: string;
  message: string;
  name?: string;
};

type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitWeb3Form({
  subject,
  message,
  name = "Shez",
}: SubmitOptions): Promise<SubmitResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return { ok: false, error: "Email is not configured yet." };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject,
        name,
        message,
        botcheck: "",
      }),
    });

    const data = await response.json();
    if (!response.ok || !data.success) {
      return { ok: false, error: data.message ?? "Could not send. Please try again." };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Could not send right now. Check your connection." };
  }
}

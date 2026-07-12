"use client";

export default function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value;
    alert(`Thank you for subscribing, ${email}!`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <input
        type="email"
        name="email"
        placeholder="Your email address"
        required
        className="flex-1 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
      />
      <button
        type="submit"
        className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition"
      >
        Subscribe
      </button>
    </form>
  );
}


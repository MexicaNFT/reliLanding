import Link from "next/link";

export const components = {
  Footer() {
    return (
      <div className="mt-4 text-center">
        By creating an account, you agree to our{' '}
        <Link href="/data-policy">
          <span className="underline text-teal cursor-pointer">
            Data Policy
          </span>
        </Link>{' '}
        and{' '}
        <Link href="/privacy-policy">
          <span className="underline text-teal cursor-pointer">
            Privacy Policy
          </span>
        </Link>.
      </div>
    );
  },
};
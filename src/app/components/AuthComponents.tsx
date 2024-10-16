import Link from "next/link";

export const components = {
    Footer() {
      return (
        <div className="mt-4 text-center">
          By creating an account, you agree to our{' '}
          <Link href="/policies">
            <span className="underline text-teal cursor-pointer">
              Terms of Service and Privacy Policy
            </span>
          </Link>
        </div>
      );
    },
  };
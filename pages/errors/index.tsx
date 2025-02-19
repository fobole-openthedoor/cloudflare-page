import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card } from "@heroui/card";
import { Link } from "@heroui/link";

const errorPages = [
  { name: "IP/Country Block", path: "/errors/ip-block" },
  { name: "WAF Block", path: "/errors/waf-block" },
  { name: "500 Class Errors", path: "/errors/500" },
  { name: "1000 Class Errors", path: "/errors/1000" },
  { name: "Interactive Challenge", path: "/errors/interactive" },
  { name: "Managed Challenge", path: "/errors/managed" },
  { name: "Country Challenge", path: "/errors/country" },
  { name: "JavaScript Challenge", path: "/errors/javascript" },
  { name: "429 Errors", path: "/errors/429" },
];

export default function ErrorPagesIndex() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Error Pages</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Cloudflare Custom Error Pages
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {errorPages.map((page) => (
            <Card 
              key={page.path}
              className="p-4 hover:scale-105 transition-transform"
            >
              <Link href={page.path} className="text-lg">
                {page.name}
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
} 
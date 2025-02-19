import { title } from "@/components/primitives";
import ErrorLayout from "@/layouts/error";
import { Card } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { ShieldBan } from "lucide-react";
import { useEffect, useState } from "react";
import { getErrorTranslation } from "@/config/translations";
import Footer from "@/components/footer";
import { getCurrentDomain } from "@/utils/domain";

export default function IPBlockPage() {
  const [locale, setLocale] = useState("en");
  const [domain, setDomain] = useState("");

  useEffect(() => {
    const browserLang = navigator.language;
    setLocale(browserLang);
    setDomain(getCurrentDomain());
  }, []);

  const { error, common } = getErrorTranslation(locale, 'ip-block');

  return (
    <ErrorLayout>
      <section className="flex flex-col items-center justify-center min-h-screen p-4">
        <Card className="max-w-lg w-full p-6">
          <div className="grid grid-cols-4 gap-2 mb-1">
            <div className="flex justify-center items-center">
              <ShieldBan 
                size={64} 
                strokeWidth={1.5}
                className="text-red-500 dark:text-red-400" 
              />
            </div>
            <div className="col-span-3 flex items-center justify-center">
              <h1 className="text-2xl font-bold text-foreground dark:text-foreground-900 leading-tight text-center">
                {domain}<br />
                {error.action}
              </h1>
            </div>
          </div>
          
          <Divider className="my-4" />
          
          <div className="text-lg text-default-600">
            {error.description}
          </div>
          
          <div className="mt-4 text-sm text-default-500">
            <p>{common.rayId}: ::RAY_ID::</p>
            <p>{common.location}: ::GEO::</p>
          </div>
        </Card>
        <Footer />
      </section>
    </ErrorLayout>
  );
} 
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

declare global {
    interface Window {
        googleTranslateElementInit?: () => void;
        google?: any;
    }
}

function GoogleTranslateProvider({ children }: { children: React.ReactNode }) {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const addGoogleTranslateScript = () => {
            if (!document.querySelector("#google-translate-script")) {
                const script = document.createElement("script");
                script.id = "google-translate-script";
                script.src =
                    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
                script.async = true;
                document.body.appendChild(script);
            }

            window.googleTranslateElementInit = () => {
                if (window.google && !isInitialized) {
                    new window.google.translate.TranslateElement(
                        {
                            pageLanguage: "x",
                            includedLanguages: "en,fr,iu,es,de,ar,pt,hi,bn",
                            layout:
                                window.google.translate.TranslateElement.InlineLayout
                                    .HORIZONTAL,
                        },
                        "google_translate_element"
                    );
                    setIsInitialized(true);
                }
            };
        };

        addGoogleTranslateScript();
    }, [isInitialized]);

    return (
        <>
            <div id="google_translate_element" className="hidden"></div>
            {children}
        </>
    );
}

export default GoogleTranslateProvider;

export function LanguageSwitcher() {
    const [selectedLanguage, setSelectedLanguage] = useState("x");

    useEffect(() => {
        // Check if there's a stored language in localStorage
        const storedLang = localStorage.getItem("selectedLanguage");
        if (storedLang) {
            setSelectedLanguage(storedLang);
        }
    }, []);

    const handleChange = (newLang: string) => {
        if (newLang === "x") {
            // Reset to original language
            setSelectedLanguage("x");
            localStorage.removeItem("selectedLanguage");

            // Clear the translation cookie
            document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

            // Reset the Google Translate dropdown if it exists
            const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
            if (select) {
                select.value = "en"; // Set to original page language
                select.dispatchEvent(new Event("change"));
            }

            // Reload the page to reset translations
            window.location.reload();
            return;
        }

        // Handle language selection
        setSelectedLanguage(newLang);
        localStorage.setItem("selectedLanguage", newLang);
        document.cookie = `googtrans=/en/${newLang}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;

        // Trigger the language change in Google Translate
        const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
        if (select) {
            select.value = newLang;
            select.dispatchEvent(new Event("change"));
        }
    };

    return (
      <div className="flex items-center gap-2">
        <Select onValueChange={handleChange} value={selectedLanguage}>
          <SelectTrigger className="w-auto !h-6 md:!h-auto rounded-full !border-none font-bold text-black/70">
            <SelectValue>
              {{
                de: "German",
                en: "English",
                fr: "French",
                iu: "Inuktut",
                es: "Spanish",
                ar: "Arabic",
                pt: "Portuguese",
                hi: "Hindi",
                bn: "Bangla",
              }[selectedLanguage] || "Language"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white text-black mt-6">
            {/* <SelectItem value="x">German</SelectItem> */}
            <SelectItem value="es">Spanish</SelectItem>{" "}
            {/* <SelectItem value="de">German</SelectItem> */}
            <SelectItem value="en">English</SelectItem>
            {/* <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="iu">Inuktut (Syllabics)</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="ar">Arabic</SelectItem>
                    <SelectItem value="pt">Portuguese</SelectItem>
                    <SelectItem value="hi">Hindi</SelectItem>
                    <SelectItem value="bn">Bangla</SelectItem> */}
          </SelectContent>
        </Select>
      </div>
    );
}
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="lg:ml-0 p-6 lg:p-12 pt-16 lg:pt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-96 h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/lawyer-courthouse.png"
                  alt="Me Nabil Ben Naoum in lawyer robes"
                  height={1000}
                  width={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Me Nabil Ben Naoum
            </h1>
            <h2 className="text-xl text-gray-600 mb-8">
              Avocat et membre du Barreau du Québec
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Avocat en droit criminel et pénal, mon équipe et moi défendons
                sans relâche les droits de nos clients à travers le Québec.
                Notre service est respectueux, sans jugement et à l'écoute de
                vos besoins.
              </p>

              <p>
                Plus encore, je serai personnellement engagé à la completion de
                mes mandats. Il est hors de question pour moi de déléguer
                ceux-ci à des stagiaires ou collègues. Vous n'aurez jamais la
                mauvaise surprise d'être défendu par un inconnu. De même, ma
                vision du droit se veut centrée uniquement sur votre intérêt et
                refuse l'approche expéditive qui tend à simplement enchaîner les
                plaidoyers de culpabilité. Si ceux-ci peuvent parfois s'avérer
                opportuns, il ne s'agira jamais de la solution par défaut. En
                effet, je privilégierai toujours lorsque possible l'option de me
                battre pour vous afin d'obtenir un acquittement, une absolution,
                un retrait des accusations ou une peine minimale. Tout au long
                du processus judiciaire, vous serez consulté et conseillé
                relativement aux solutions possibles à apporter à votre dossier.
              </p>
            </div>

            <div className="mt-8">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-base font-medium">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

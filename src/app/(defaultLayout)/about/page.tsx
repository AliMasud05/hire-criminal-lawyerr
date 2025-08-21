import { Button } from "@/components/ui/button";
import Image from "next/image";
import nabil from "@/assets/about/nabil.png";
import vector from "@/assets/about/Vector.png";
import experience from "@/assets/about/experince.png"; 
import hand from "@/assets/about/hand.png";
import rating from "@/assets/about/rating.png";

export default function AboutPage() {

  const Introduction = [
    {
      title: "15+",
      description:"Years of Experince",
      icon: experience

    },
    {
      title: "95%",
      description:"Success Rate", 
      icon: vector
    },
    {
      title: "500+",
      description:"Cases Handled",
      icon: hand
    },
    {
      title: "5.0",
      description:"Client Rating",   
      icon: rating
    },
  ];


  return (
    <div className="lg:ml-0 p-6 lg:p-12 pt-16 lg:pt-26">
      <div className="max-w-7xl ml-0 md:ml-14">
        <div className="grid grid-cols-1 lg:grid-cols-6  items-center mb-16">
          {/* Professional Photo */}
          <div className="col-span-1 md:col-span-2 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-96 h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={nabil.src}
                  alt="Me Nabil Ben Naoum in lawyer robes"
                  height={1000}
                  width={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="col-span-1 md:col-span-4">
            <h1
              className="text-4xl lg:text-6xl font-semibold
             text-gray-900 mb-6 leading-tight"
            >
              Me Nabil Ben Naoum
            </h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-8">
              Avocat et membre du Barreau du Québec
            </h2>

            <div className="space-y-6 font-normal text-base text-gray-600 leading-relaxed">
              <p className="description">
                Avocat en droit criminel et pénal, mon équipe et moi défendons
                sans relâche les droits de nos clients à travers le Québec.
                Notre service est respectueux, sans jugement et à l&apos;écoute
                de vos besoins.
              </p>

              <p>
                Plus encore, je serai personnellement engagé à la completion de
                mes mandats. Il est hors de question pour moi de déléguer
                ceux-ci à des stagiaires ou collègues. Vous n&apos;aurez jamais
                la mauvaise surprise d&apos;être défendu par un inconnu. De
                même, ma vision du droit se veut centrée uniquement sur votre
                intérêt et refuse l&apos;approche expéditive qui tend à
                simplement enchaîner les plaidoyers de culpabilité. Si ceux-ci
                peuvent parfois s&apos;avérer opportuns, il ne s&apos;agira
                jamais de la solution par défaut. En effet, je privilégierai
                toujours lorsque possible l&apos;option de me battre pour vous
                afin d&apos;obtenir un acquittement, une absolution, un retrait
                des accusations ou une peine minimale. Tout au long du processus
                judiciaire, vous serez consulté et conseillé relativement aux
                solutions possibles à apporter à votre dossier.
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

      <div
        className="flex items-center justify-around
       gap-6 my-10 bg-[#F6F6F6] py-6"
      >
        {Introduction.map((intro, index) => (
          <div key={index} className="flex items-center gap-6 ">
            <Image
              src={intro.icon.src}
              alt="Nabil Ben-Naoum, Criminal Defense Lawyer"
              width={1000}
              height={1000}
              className="w-14 h-14 "
            />
            <div className="flex flex-col items-center space-y-1">
              <h3
                className="text-3xl md:text-4xl 
                font-bold text-[#333333] font-inter"
              >
                {intro.title}
              </h3>
              <p className="text-base font-normal font-inter text-center text-[#333333]">
                {intro.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { BadgeCheck, LayoutTemplate } from "lucide-react";
import { Card } from "../../components/Card";
import { ContentArea } from "../../components/ContentArea";
import { SectionTitle } from "../../components/SectionTitle";
import { useLanguage } from "../../hooks/useLanguage";
import { Button } from "../../components/Button";

export function ServicesSection() {
  const { title, buttonCta, cards } = useLanguage().content.services;

  return (
    <section
      id="services"
      className="pt-10 pb-20 bg-linear-to-b from-(--bg-dark) via-(--bg-darker) to-(--bg-dark)">
      <ContentArea>
        <SectionTitle text={title} />

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 w-full items-center flex gap-4 flex-col">
          {cards.map(card => {
            return (
              <Card key={card.id} style="flex flex-col justify-between h-[350px]">
                <div>
                  <div
                    className="text-white my-4 flex gap-4 text-2xl items-center">
                    <LayoutTemplate size={40} className="text-(--accent)" /> {card.name}
                  </div>

                  <p className="text-white/70">{card.description}</p>

                  <ul className="text-white/70 text-sm mt-4">
                    {card.ctas.map(cta => {
                      return (
                        <li className="flex gap-1 items-center mt-1">
                          <BadgeCheck size={16} className="text-(--accent)" />
                          {cta}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <Button accent style="mt-6">{buttonCta}</Button>
              </Card>
            );
          })}
        </div>

      </ContentArea>
    </section >
  );
}
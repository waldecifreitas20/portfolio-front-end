import { Send } from "lucide-react";
import { Button } from "../../components/Button";
import { ContentArea } from "../../components/ContentArea";
import { useLanguage } from "../../hooks/useLanguage";
import { Input } from "./Input";
import { Select } from "./Select";
import { useState } from "react";
import { Loading } from "../../components/Loading";


export function ContactSection() {
  const { title, buttonSend, inputsLabels, subtitle } = useLanguage().content.contact;
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();

    if (!isSubmitting) {
      setIsSubmitting(() => true);


      const formElement = evt.target;
      const data = new FormData(formElement);

      const all = Object.fromEntries(data.entries());
      setTimeout(() => {
        setIsSubmitting(false);
        alert("Mensagen enviada! Obrigado por entrar em contato. Em breve estarei entrando em conato com você. ");
      }, 2000);
    }
  }

  return (
    <section id="contact" className="min-h-screen py-10 bg-(--bg-dark) text-white/70">
      <ContentArea>

        <h2 className="text-3xl text-white font-bold">{title}</h2>
        <p>{subtitle}</p>


        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
          <div className="md:flex w-full gap-4">
            <Input name="name" label={inputsLabels.name} required />
            <Input name="email" type="email" label={"Email"} required />
          </div>

          <Select
            name="subject"
            label={inputsLabels.subject}
            options={inputsLabels.subjectChoices}
            required={true}
          />

          <Input name="message" label={inputsLabels.message} required textarea />

          <Button
            disabled={isSubmitting}
            style={`
            md:w-[250px] h-10
            flex gap-2 
            items-center justify-center
            leading-none
            `}>
            {isSubmitting ? (
              <Loading />
            ) : (
              <>
                <span className="">{buttonSend}</span>
                <Send size={16} />
              </>
            )}
          </Button>
        </form>
      </ContentArea >
    </section >
  );
}
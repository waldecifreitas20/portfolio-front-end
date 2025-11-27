import { Button } from "../../components/Button";
import { ContentArea } from "../../components/ContentArea";
import { useLanguage } from "../../hooks/useLanguage";
import { Input } from "./Input";
import { Select } from "./Select";

export function ContactSection() {
  const { title, buttonSend, inputsLabels, subtitle } = useLanguage().content.contact;

  return (
    <section id="contact" className="min-h-screen py-10 bg-(--bg-dark) text-white/70">
      <ContentArea>
        <h2 className="text-3xl text-white font-bold">{title}</h2>
        <p>{subtitle}</p>


        <form className="mt-5 flex flex-col gap-4">
          <Input name="name" label={inputsLabels.name} required />
          <Input name="email" type="email" label={"Email"} required />

          <Select
            name="subject"
            label={inputsLabels.subject}
            options={inputsLabels.subjectChoices}
            required={true}
          />

          <Input name="message" label={inputsLabels.message} required textarea />

          <Button>{buttonSend}</Button>
        </form>
      </ContentArea>
    </section>
  );
}
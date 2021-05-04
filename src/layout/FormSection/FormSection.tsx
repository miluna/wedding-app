import { useState } from "react";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TOPICS from "../../topics";

const texts = {
  title: "Registrarse",
  text1: "Nombre",
  text2: "Email",
  text3: "Telefono",
  text4: "Menú pescado",
  text5: "Menu vegetariano",
  button: "Registrar",
  button2: "Limpiar",
};

const FormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fishMenu, setFish] = useState(false);
  const [veggieMenu, setVegetarian] = useState(false);

  const submit = () => {
    firebase
      .firestore()
      .collection("wedding-guests")
      .doc(uuid())
      .set({ name, email, phone, fishMenu, veggieMenu })
      .then(() => {
        // TOPICS.TOAST_TOPIC.next("Guardado!!");
        alert("Datos guardados! Gracias :)");
        clear();
      })
      .catch((error: any) => {
        // TOPICS.TOAST_TOPIC.error("Ha occurido un error :(");
        alert("Ha occurido un error :(");
        console.error("Error writing document: ", error);
      });
  };

  const clear = () => {
    setName("");
    setEmail("");
    setPhone("");
    setFish(false);
    setVegetarian(false);
  };

  return (
    <div id="register" className="mt-24 mb-24 flex justify-center items-center">
      <div className="flex flex-col max-w-sm w-full justify-center bg-white shadow-md rounded-lg overflow-hidden mx-auto p-8">
        <h3 className="text-4xl font-bold mb-2">{texts.title}</h3>
        <Input
          id="name"
          placeholder={texts.text1}
          type="text"
          value={name}
          onTyping={(e: string) => setName(e)}
        />

        <Input
          id="email"
          placeholder={texts.text2}
          type="email"
          value={email}
          onTyping={(e: string) => setEmail(e)}
        />

        <Input
          id="phone"
          placeholder={texts.text3}
          type="text"
          value={phone}
          onTyping={(e: string) => setPhone(e)}
        />
        <Input
          id="fish"
          placeholder={texts.text4}
          type="checkbox"
          value={fishMenu}
          onTyping={(e: boolean) => setFish(e)}
        />
        <Input
          id="vegetarian"
          placeholder={texts.text5}
          type="checkbox"
          value={veggieMenu}
          onTyping={(e: boolean) => setVegetarian(e)}
        />
        <div className="mt-8 flex justify-end">
          <Button
            text={texts.button}
            secondary
            onClick={() => submit()}
            size="small"
          />
          <Button text={texts.button2} onClick={() => clear()} size="small" />
        </div>
      </div>
    </div>
  );
};

export default FormSection;

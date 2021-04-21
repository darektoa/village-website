import React, { useState } from "react";
import Facebook from "../../assets/images/Facebook - Negative.svg";
import Twitter from "../../assets/images/Twitter - Negative.svg";
import Instagram from "../../assets/images/Instagram - Negative.svg";
import Face from "../../assets/images/face_black_36dp.svg";
import Email from "../../assets/images/email_black_36dp.svg";
import PhoneIcon from "../../assets/images/phone_black_24dp 1.svg";
import axios from "axios";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pesan, setPesan] = useState("");
  const [sent, setSent] = useState(false);

  //   End point of handle input

  const resetForm = () => {
    setName(null);
    setEmail(null);
    setPhone(null);
    setPesan(null);

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e04seir",
        "template_xbfd3gu",
        e.target,
        "user_xhoB9X9QplOIofnjLxZMr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    resetForm();
  };

  return (
    <div id="ctc-ms-container">
      <div className="ctc-container">
        <div className="ctc-header">
          <h1>Kontak</h1>

          <p>Leuwigajah, Cimahi Selatan, Cimahi, Jawa Barat 40532</p>

          <p>Telepon : 021 798365, Email : kampoengcireundeu@kampoeng.id</p>

          <p>Hari Kerja: Senin – Jumat</p>

          <p>Waktu Kerja: 07.000 – 16.00 WIT</p>

          <div className="ctc-sosmed">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="ctc-item"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://twitter.com/home?lang=en"
              target="_blank"
              className="ctc-item"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="ctc-item"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>

        <form className="ctc-content-container" onSubmit={formSubmit}>
          {/* --------------- Contact  */}
          <div className="ctc-content-input-container">
            {/* ---------- Contact left */}
            <div className="ctc-content-left">
              {/* --------- COntact input */}
              <div className="ctc-content-input">
                <label htmlFor="name">Nama Anda</label>
                <div className="ctc-input-withicon">
                  <input type="text" name="name" placeholder="Nama anda" />
                  <img src={Face} alt="face" />
                </div>
              </div>
              <div className="ctc-content-input">
                <label htmlFor="email">Email</label>
                <div className="ctc-input-withicon">
                  <input type="text" name="email" placeholder="Alamat Email" />
                  <img src={Email} alt="email" />
                </div>
              </div>
              <div className="ctc-content-input">
                <label htmlFor="phone">Phone</label>
                <div className="ctc-input-withicon">
                  <input
                    type="number"
                    name="phone"
                    placeholder="Nomer telepon"
                  />
                  <img src={PhoneIcon} alt="phone" />
                </div>
              </div>
            </div>

            {/* ---------- Content right */}
            <div className="ctc-content-right">
              <div className="ctc-content-input">
                <label htmlFor="pesan">Pesan</label>
                <textarea
                  type="text"
                  name="pesan"
                  placeholder="Isi pesan anda"
                />
              </div>
            </div>
          </div>

          <p>Note: Pesan akan dibaca hanya saat jam kerja</p>

          <button type="submit">Kirim Pesan</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

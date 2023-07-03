"use client";
import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.scss";
import classNames from "classnames";
export default function Contact() {
  const ref = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  let count = 0;
  const [limit, setLimit] = useState(false);
  const [success, setSuccess] = useState(null);
  console.log(watch("example"));
  const onSubmit = (e) => {
    console.log(e);
    count++;
    {
      count == 1 && setLimit(true);
    }

    emailjs
      .sendForm(
        "service_8j0928k",
        "template_l4yi9mg",
        ref.current,
        "Mjk41bwr-b_4yGOY1"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <div className={styles.Contact}>
      <form
        className={styles.Contact__Form}
        ref={ref}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.Contact__InputWrapper}>
          <input
            className={classNames(styles.Contact__Input, {
              [styles["Contact__Input--error"]]:
                errors.name?.type === "required",
            })}
            placeholder="Name"
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name?.type === "required" && (
            <span className={styles.Contact__Error}>Name is blank</span>
          )}
        </div>

        <div className={styles.Contact__InputWrapper}>
          <input
            className={classNames(styles.Contact__Input, {
              [styles["Contact__Input--error"]]: errors.email,
            })}
            placeholder="Mail"
            {...register("email", {
              required: "Filling is required!",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Mail is not valid!",
              },
            })}
          />
          {errors.email && (
            <span className={styles.Contact__Error}>
              The email is incorrect
            </span>
          )}
        </div>
        <div className={styles.Contact__InputWrapper}>
          <textarea
            className={classNames(styles.Contact__TextArea, {
              [styles["Contact__TextArea--error"]]:
                errors.message?.type === "required",
            })}
            placeholder="Message"
            {...register("message", { required: true })}
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message?.type === "required" && (
            <span className={styles.Contact__Error}>Message is blank</span>
          )}
        </div>
        {!limit && (
          <button className={styles.Contact__Button} type="submit">
            SUBMIT
          </button>
        )}
        {success && (
          <span className={styles.Contact__SubmitMassage}>
            "Your message has been sent."
          </span>
        )}
      </form>
    </div>
  );
}

import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";
import { EditorState } from "draft-js";
import { RichEditorExample } from "./RichEditorExample";

import Debug from "./Debug.jsx";

const initialValues = {
  friends: [
    {
      name: "",
      email: ""
    }
  ],
  editorState: new EditorState.createEmpty()
};

const FormikExample = () => (
  <div>
    <h1>Invitation to Formik Example</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        friends: Yup.array().of(
          Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string()
              .email("Invalid email!")
              .required("Required")
          })
        )
      })}
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ values, isSubmitting, handleBlur, setFieldValue }) => (
        <Form>
          <RichEditorExample
            onChange={setFieldValue}
            onBlur={handleBlur}
            editorState={values.editorState}
          />
          <FieldArray name="friends">
            {({ push, remove }) => (
              <React.Fragment>
                {values.friends &&
                  values.friends.length > 0 &&
                  values.friends.map((friend, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <Field name={`friends[${index}].name`} type="text">
                          {({ field, form }) => (
                            <input
                              {...field}
                              type="text"
                              placeholder="Shashank"
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          name={`friends[${index}].name`}
                          type="text"
                        >
                          {msg => <div className="field-error">{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div className="col">
                        <Field
                          name={`friends[${index}].email`}
                          type="email"
                          placeholder="shashank@example.com"
                        />
                        <ErrorMessage
                          name={`friends[${index}].email`}
                          type="text"
                        >
                          {msg => <div className="field-error">{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          onClick={() => {
                            remove(index);
                          }}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="secondary"
                  onClick={() => {
                    push({ name: "", email: "" });
                  }}
                >
                  Add friend
                </button>
              </React.Fragment>
            )}
          </FieldArray>
          <button type="submit" disabled={isSubmitting}>
            Invite
          </button>
          <Debug />
        </Form>
      )}
    </Formik>
  </div>
);

export default FormikExample;

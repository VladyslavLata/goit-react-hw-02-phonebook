import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

const schema = yup.object().shape({
  name: yup
    .string()
    .strict()
    .trim()
    .min(2)
    .max(30)
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required(),
  number: yup
    .string()
    .strict()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    ),
});

const initialValues = {
  name: '',
  number: '',
};

export const PhonebookForm = ({ onAddContact, onReviewName }) => {
  const handleSubmit = (values, actions) => {
    if (onReviewName(values.name)) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    onAddContact({ ...values, id: nanoid() });
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">
          <p>Name</p>
          <Field autoComplete="off" type="text" name="name" />
          <ErrorMessage component="p" name="name" />
        </label>
        <label htmlFor="number">
          <p>Number</p>
          <Field type="tel" name="number" />
          <ErrorMessage component="p" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

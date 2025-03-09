import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const validationSchema = Yup.object({
    date: Yup.string().required("Please select a date"),
    time: Yup.string().required("Please select a time"),
    guests: Yup.number()
      .min(1, "At least 1 guest required")
      .max(10, "Maximum 10 guests allowed")
      .required("Please enter the number of guests"),
    occasion: Yup.string().required("Please select an occasion"),
  });

  return (
    <section className="form">
      <Formik
        initialValues={{
          date: "",
          time: "",
          guests: 1,
          occasion: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          submitForm(values);
          resetForm();
        }}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="date">Choose a date</label>
              <Field
                type="date"
                id="date"
                name="date"
                className={errors.date && touched.date ? "input-error" : ""}
                onChange={(e) => {
                  setFieldValue("date", e.target.value);
                  dispatch({ type: "UPDATE_TIMES", payload: e.target.value });
                }}
              />
              <ErrorMessage name="date" component="small" className="error-message" />
            </div>

            <div>
              <label htmlFor="time">Choose a time</label>
              <Field
                as="select"
                id="time"
                name="time"
                className={errors.time && touched.time ? "input-error" : ""}
              >
                <option value="">Select a time</option>
                {availableTimes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="time" component="small" className="error-message" />
            </div>

            <div>
              <label htmlFor="guests">Number of guests</label>
              <Field
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="10"
                className={errors.guests && touched.guests ? "input-error" : ""}
              />
              <ErrorMessage name="guests" component="small" className="error-message" />
            </div>

            <div>
              <label htmlFor="occasion">Occasion</label>
              <Field
                as="select"
                id="occasion"
                name="occasion"
                className={errors.occasion && touched.occasion ? "input-error" : ""}
              >
                <option value="">Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage name="occasion" component="small" className="error-message" />
            </div>

            <button className="btn-primary" type="submit">
              Book Now
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default BookingForm;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../redux/actions/form.action";

const MatchingForm = () => {
  const matchingForm = useSelector((state) => state.form.matchingForm);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(formActions.matchingForm({ id: "61123b94cd9bdb5d500dd0a1" }));
  }, [dispatch]);
  console.log(matchingForm);

  return (
    <div>
      {matchingForm?.map((form) => (
        <div
          className="matching-receiver"
          onClick={() => {
            dispatch(formActions.changeSubpage("receiver"));
            dispatch(formActions.getSingleForm({ id: form._id }));
          }}
        >
          <div className="d-flex justify-content-between">
            <span style={{ marginBottom: "1rem", textTransform: "uppercase" }}>
              {form.userId.name}{" "}
            </span>
            <span>{Math.round((form.distance / 1000) * 10) / 10} km</span>
          </div>

          {form.items.map((item) => (
            <>
              <div className="d-flex justify-content-between">
                <span> {item.name} </span>
                <span>
                  {item.quantity} {item.unit}
                </span>
              </div>
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatchingForm;

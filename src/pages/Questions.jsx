import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const { amount_of_question, score } = useSelector((state) => state);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return <div>Questions</div>;
};

export default Questions;

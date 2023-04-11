import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";

export default function useModal() {
  const navigate = useNavigate();
  const {resetBasket} = useActions();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    if(isOpen) {
      navigate('/');
      resetBasket();
    }
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggle
  };
};
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {resetBasket} = useActions();

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
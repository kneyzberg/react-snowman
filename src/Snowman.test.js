import React from "react";

import { render, fireEvent, getByText } from "@testing-library/react";
import Snowman from "./Snowman";


describe("end of lost game renders correctly", function(){
  test("lost game shows last image and You lose + correct word", function() {
    const {container} = render(<Snowman />);

    const wronguess1 = getByText(container, "z").closest("button");
    const wronguess2 = getByText(container, "b").closest("button");
    const wronguess3 = getByText(container, "d").closest("button");
    const wronguess4 = getByText(container, "i").closest("button");
    const wronguess5 = getByText(container, "j").closest("button");
    const wronguess6 = getByText(container, "z").closest("button");
 
    fireEvent.click(wronguess1);
    fireEvent.click(wronguess2);
    fireEvent.click(wronguess3);
    fireEvent.click(wronguess4);
    fireEvent.click(wronguess5);
    fireEvent.click(wronguess6);

    expect(container.querySelector("img").getAttribute("src")).toEqual("6.png");
    expect(container).toMatchSnapshot();
    expect(container.querySelectorAll("button").length).toEqual(0);
    expect(container).toContainHTML("You lose! the correct word is apple");

  });
})


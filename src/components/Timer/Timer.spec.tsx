import React from "react"
import { configure, shallow } from "enzyme"
import Timer from "./Timer"

import Adapter from 'enzyme-adapter-react-16';



describe("Timer", () => {
  let container:any
  configure({ adapter: new Adapter() });
  beforeEach(() => (container = shallow(<Timer />)))

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })

  it("should render instances of the TimerButton component", () => {
    expect(container.find("TimerButton").length).toEqual(3)
  })
})
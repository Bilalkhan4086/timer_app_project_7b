import React from "react"
import { shallow, configure} from "enzyme"
import TimerButton from "./TimerButton"
import Adapter from 'enzyme-adapter-react-16';

describe("TimerButton", () => {
  let container:any
  configure({ adapter: new Adapter() });
  beforeEach(() => {
    container = shallow(<TimerButton buttonAction={jest.fn()} buttonValue={"1"}/>
    )
  })

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })
})
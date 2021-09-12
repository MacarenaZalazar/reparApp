import { StyledDiv } from "./styledCheckbox";

const Checkbox = ({ label, value, onChange }) => {
  return (
    <StyledDiv>
      <label className="input">
        <input type="checkbox" checked={value} onChange={onChange} />
        <div className="label">
          <p>{label}</p>
        </div>
      </label>
    </StyledDiv>
  );
};

export default Checkbox;

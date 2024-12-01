import "./confirm.css";
import Backdrop from "./Backdrop";

type buttonProps = {
  text: string;
  isIndex: boolean;
  setIsConfirm: any;
  isCall: {
    call: string;
    text: string;
  };
  buttonConfig: any;
  isPatientId: number | undefined;
  data: {};
};

const Confirm = ({
  isIndex,
  isCall,
  buttonConfig,
  isPatientId,
  data,
}: buttonProps) => {
  const discharge = buttonConfig?.dischargeHandler;
  const refer = buttonConfig?.referHandler;
  const navigate = buttonConfig?.navigateHandler;
  const closeHandler = buttonConfig?.closeHandler;
  const deleteHandler = buttonConfig?.handleDelete;

  const handleConfirm = () => {
    if (isCall.call === "dischargeCall") {
      discharge(isPatientId);
    } else if (isCall.call === "referCall") {
      refer(isPatientId);
    } else if (isCall.call === "assignCall") {
      navigate(data, "jkj");
    } else if (isCall.call === "deleteCall") {
      deleteHandler(isPatientId);
    }
  };

  return (
    <>
      <Backdrop closeHandler={closeHandler} />
      <div
        className={`confirmContainer ${
          isIndex === isIndex ? "block" : "hidden"
        }`}
      >
        <div className="confirmBox ">
          <h4>Do You Want {isCall?.text}</h4>
          <div className="buttonBox">
            <button onClick={() => closeHandler()}>Cancel</button>
            <button onClick={handleConfirm}>Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;

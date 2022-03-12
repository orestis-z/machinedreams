// log
import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = (blockchain) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
        const data = {}

        console.log(blockchain.smartContract.methods)

        const totalSupply = await blockchain
        .smartContract.methods.totalSupply().call();
        console.log(totalSupply)
        data.totalSupply = totalSupply;

        if ('publicSaleIsActive' in blockchain
        .smartContract.methods) {
            const publicSaleIsActive = await blockchain
            .smartContract.methods.publicSaleIsActive().call();
            console.log(publicSaleIsActive)
            data.publicSaleIsActive = publicSaleIsActive;
        }

        if ('binarySaleIsActive' in blockchain
        .smartContract.methods) {
            const binarySaleIsActive = await blockchain
            .smartContract.methods.binarySaleIsActive().call();
            console.log(binarySaleIsActive)
            data.binarySaleIsActive = binarySaleIsActive;
        }

        if ('saleIsActive' in blockchain
        .smartContract.methods) {
            const saleIsActive = await blockchain
            .smartContract.methods.saleIsActive().call();
            console.log(saleIsActive)
            data.saleIsActive = saleIsActive;
        }

      dispatch(
        fetchDataSuccess(data)
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};

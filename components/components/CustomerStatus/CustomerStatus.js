import React, { useState } from "react";
import customerData from "./customerData.json";
import Dashboard from "./components/Dashboard/Dashboard";
import Progress from "./components/Progress/Progress";
import styles from "./styles/CustomerStatus.module.scss";

const CustomerStatus = () => {
  const [selectedCustomerIndex, setSelectedCustomerIndex] = useState(0);

  return (
    <section className={styles.customerStatus}>
      {!customerData ? (
        <div className={styles.loading__bar}>Loading...</div>
      ) : (
        <>
          <Dashboard
            selectedDataIndex={selectedCustomerIndex}
            setSelectedDataIndex={setSelectedCustomerIndex}
            data={customerData}
            lastIndex={customerData.length - 1}
          />
          <Progress
            dataStatus={customerData[selectedCustomerIndex].status}
            dataAction={customerData[selectedCustomerIndex].kundeaksjonspunkt}
            statusComplete={
              customerData[
                selectedCustomerIndex
              ].status === "Avsluttet"
            }
          />
        </>
      )}
    </section>
  );
};

export default CustomerStatus;

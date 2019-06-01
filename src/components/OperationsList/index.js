import React from 'react';
import OperationContainer from 'containers/OperationContainer';

const OperationsList = ({operations}) => {
  return(
    <div className="operations-list">
      {operations.map(operation =>
        <OperationContainer key={operation.id} operation={operation}/>
      )}
    </div>
  );
}

export default OperationsList;
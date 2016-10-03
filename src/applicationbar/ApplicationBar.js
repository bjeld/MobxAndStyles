import React from 'react';
import { observer, inject } from 'mobx-react';

const ApplicationBar = inject("styleStore")(observer(( { styleStore }) =>
  <div style={styleStore.applicationBarStyle}>
    <div>
      Lorem Ipsum
    </div>
  </div>
))

export default ApplicationBar

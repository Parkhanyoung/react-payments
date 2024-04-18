import{C as a}from"./CardPreview-B4NmXPhh.js";import"./styled-components.browser.esm-BZ2fBL8i.js";import"./index-DjqTBZmW.js";const c={title:"CardPreview",component:a,argTypes:{cardNumbers:{description:"• Visa: 4로 시작하는 16자리 숫자 <br /> • MasterCard: 51~55로 시작하는 16자리 숫자",options:{default:{first:"1234",second:"1234",third:"1234",fourth:"1234"},"visa card (4로 시작)":{first:"4444",second:"4444",third:"4444",fourth:"4444"},"master card (51~55로 시작)":{first:"5555",second:"5555",third:"5555",fourth:"5555"}},control:{type:"select"}},expiryDate:{options:{"2024년 4월":{month:"04",year:"24"},"2025년 11월":{month:"11",year:"25"},"2040년 12월":{month:"12",year:"40"}},control:{type:"select"}}}},r={args:{cardNumbers:{first:"1234",second:"1234",third:"1234",fourth:"1234"},expiryDate:{month:"11",year:"25"},cardholderName:"John Doe"}};var e,t,o;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    cardNumbers: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234'
    },
    expiryDate: {
      month: '11',
      year: '25'
    },
    cardholderName: 'John Doe'
  }
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const i=["Default"];export{r as Default,i as __namedExportsOrder,c as default};

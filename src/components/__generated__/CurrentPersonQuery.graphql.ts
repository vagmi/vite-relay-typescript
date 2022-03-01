/**
 * @generated SignedSource<<3f2dbba7ae87e025807b5bd9bb7f5da2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CurrentPersonQuery$variables = {};
export type CurrentPersonQuery$data = {
  readonly currentPerson: {
    readonly fullName: string | null;
    readonly email: string | null;
  } | null;
};
export type CurrentPersonQuery = {
  variables: CurrentPersonQuery$variables;
  response: CurrentPersonQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "CurrentUser",
    "kind": "LinkedField",
    "name": "currentPerson",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fullName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CurrentPersonQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CurrentPersonQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0a217ee0d7eda91dc9e8b4458b486fe8",
    "id": null,
    "metadata": {},
    "name": "CurrentPersonQuery",
    "operationKind": "query",
    "text": "query CurrentPersonQuery {\n  currentPerson {\n    fullName\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "21315bac3ac29b5c09e2ad30298f11c0";

export default node;

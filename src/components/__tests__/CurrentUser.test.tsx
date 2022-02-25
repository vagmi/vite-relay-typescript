import React from "react";
import { CurrentUser } from "../CurrentUser";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";
import { act, render, screen } from "@testing-library/react";
import { RelayEnvironmentProvider } from "react-relay";
import { Suspense } from "react";
import { CurrentUserQuery$data } from "../__generated__/CurrentUserQuery.graphql";

async function waitFor(ms: number) {
  return new Promise((res, _rej) => {
    setTimeout(res, ms);
  });
}
describe("CurrentUser", () => {
  it("passes", async () => {
    const env = createMockEnvironment();
    let { baseElement, debug } = render(
      <RelayEnvironmentProvider environment={env}>
        <Suspense fallback={"loading..."}>
          <CurrentUser />
        </Suspense>
      </RelayEnvironmentProvider>
    );
    console.log("initial...")
    // debug();
    interface resp {
      data: CurrentUserQuery$data
    }
    let mockedData
    await act(async () => {
      env.mock.resolveMostRecentOperation((op) => {
        console.log(`operation `, op);
        mockedData = MockPayloadGenerator.generate(op);
        console.log(mockedData);
        return mockedData;
        // return {
        //   data: {
        //     currentPerson: {
        //       fullName: "Full Name",
        //       email: "useremail@email.email",
        //     },
        //   },
        // };
      });
      await waitFor(50);
    });
    console.log("later...")
    // debug();
    expect(2 + 2).toEqual(4);
    let user = ((mockedData as unknown) as resp).data.currentPerson!;
    expect(await screen.findByText(new RegExp(user.fullName!))).not.toBe(null);
    expect(await screen.findByText(new RegExp(user.email!))).not.toBe(null);
  });
});
export {};

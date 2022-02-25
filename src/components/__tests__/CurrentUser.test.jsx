import React from "react";
import { CurrentUser } from "../CurrentUser";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";
import { act, render, screen } from "@testing-library/react";
import { RelayEnvironmentProvider } from "react-relay";
import { Suspense } from "react";

async function waitFor(ms) {
  return new Promise((res, _rej) => {
    setTimeout(res, ms);
  });
}
describe("CurrentUser in JS", () => {
  it("passes", async () => {
    const env = createMockEnvironment();
    let { debug } = render(
      <RelayEnvironmentProvider environment={env}>
        <Suspense fallback={"loading..."}>
          <CurrentUser />
        </Suspense>
      </RelayEnvironmentProvider>
    );
    // debug();
    let mockedData
    await act(async () => {
      env.mock.resolveMostRecentOperation((op) => {
        mockedData = MockPayloadGenerator.generate(op);
        return mockedData;
      });
      await waitFor(50);
    });
    // debug();
    expect(await screen.findByText(new RegExp(mockedData.data.currentPerson.fullName))).not.toBe(null);
    expect(await screen.findByText(new RegExp(mockedData.data.currentPerson.email))).not.toBe(null);
  });
});
export {};

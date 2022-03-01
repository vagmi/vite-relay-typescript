import { CurrentUser } from "../CurrentUser";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";
import { act, render, screen, waitFor } from "@testing-library/react";
import { RelayEnvironmentProvider } from "react-relay";
import React, { Suspense } from "react";
import { CurrentPersonQuery$data } from "../__generated__/CurrentPersonQuery.graphql";

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
    interface resp {
      data: CurrentPersonQuery$data
    }
    let mockedData: any
    await act(async () => {
      env.mock.resolveMostRecentOperation((op) => {
        console.log(`operation `, op);
        mockedData = MockPayloadGenerator.generate(op);
        console.log(mockedData);
        return mockedData;
      });
    });
    await waitFor(async () => {
      let user = ((mockedData as unknown) as resp).data.currentPerson!;
      expect(await screen.findByText(new RegExp(user.fullName!))).not.toBe(null);
      expect(await screen.findByText(new RegExp(user.email!))).not.toBe(null);

    });
  });
});
export {};

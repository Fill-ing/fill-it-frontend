import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useFunnelStep } from "./useFunnelStep";

describe("useFunnelStep", () => {
  const testSteps = ["step1", "step2", "step3", "step4"] as const;

  it("초기값은 배열의 첫 번째 단계여야 한다", () => {
    const { result } = renderHook(() =>
      useFunnelStep({
        steps: testSteps,
      }),
    );

    expect(result.current.currentStep).toBe("step1");
  });

  it("moveToNextStep을 호출하면 다음 단계로 이동한다", () => {
    const { result } = renderHook(() =>
      useFunnelStep({
        steps: testSteps,
      }),
    );

    act(() => {
      result.current.moveToNextStep();
    });

    expect(result.current.currentStep).toBe("step2");
  });

  it("moveToNextStep을 여러 번 호출하면 순차적으로 이동한다", () => {
    const { result } = renderHook(() =>
      useFunnelStep({
        steps: testSteps,
      }),
    );

    act(() => {
      result.current.moveToNextStep();
      result.current.moveToNextStep();
      result.current.moveToNextStep();
    });

    expect(result.current.currentStep).toBe("step4");
  });

  it("마지막 단계에서 moveToNextStep을 호출하면 단계가 변하지 않는다", () => {
    const { result } = renderHook(() =>
      useFunnelStep({
        steps: testSteps,
      }),
    );

    // 마지막 단계로 이동
    act(() => {
      result.current.moveToNextStep();
      result.current.moveToNextStep();
      result.current.moveToNextStep();
    });

    expect(result.current.currentStep).toBe("step4");

    // 추가로 호출해도 변하지 않음
    act(() => {
      result.current.moveToNextStep();
    });

    expect(result.current.currentStep).toBe("step4");
  });

  it("moveToPrevStep을 호출하면 이전 단계로 이동한다", () => {
    const { result } = renderHook(() =>
      useFunnelStep({
        steps: testSteps,
      }),
    );

    // 두 번째 단계로 이동
    act(() => {
      result.current.moveToNextStep();
    });

    expect(result.current.currentStep).toBe("step2");

    // 이전 단계로 이동
    act(() => {
      result.current.moveToPrevStep();
    });

    expect(result.current.currentStep).toBe("step1");
  });

  it("첫 번째 단계에서 moveToPrevStep을 호출하면 단계가 변하지 않는다", () => {
    const { result } = renderHook(() =>
      useFunnelStep({
        steps: testSteps,
      }),
    );

    expect(result.current.currentStep).toBe("step1");

    act(() => {
      result.current.moveToPrevStep();
    });

    expect(result.current.currentStep).toBe("step1");
  });

  it("앞뒤로 이동을 반복할 수 있다", () => {
    const { result } = renderHook(() =>
      useFunnelStep({
        steps: testSteps,
      }),
    );

    act(() => {
      result.current.moveToNextStep();
    });
    expect(result.current.currentStep).toBe("step2");

    act(() => {
      result.current.moveToNextStep();
    });
    expect(result.current.currentStep).toBe("step3");

    act(() => {
      result.current.moveToPrevStep();
    });
    expect(result.current.currentStep).toBe("step2");

    act(() => {
      result.current.moveToNextStep();
    });
    expect(result.current.currentStep).toBe("step3");
  });
});

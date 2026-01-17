import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useFunnelData } from "./useFunnelData";

describe("useFunnelData", () => {
  interface TestDataType {
    step1: { value: string };
    step2: { count: number };
    step3: { items: string[] };
  }

  const initialData: TestDataType = {
    step1: { value: "" },
    step2: { count: 0 },
    step3: { items: [] },
  };

  it("초기 데이터로 상태가 설정된다", () => {
    const { result } = renderHook(() =>
      useFunnelData({
        initialData,
      }),
    );

    expect(result.current.funnelData).toEqual(initialData);
  });

  it("updateData로 데이터를 부분적으로 업데이트할 수 있다", () => {
    const { result } = renderHook(() =>
      useFunnelData({
        initialData,
      }),
    );

    act(() => {
      result.current.updateData({ step1: { value: "test" } });
    });

    expect(result.current.funnelData.step1.value).toBe("test");
    expect(result.current.funnelData.step2).toEqual({ count: 0 });
    expect(result.current.funnelData.step3).toEqual({ items: [] });
  });

  it("여러 필드를 동시에 업데이트할 수 있다", () => {
    const { result } = renderHook(() =>
      useFunnelData({
        initialData,
      }),
    );

    act(() => {
      result.current.updateData({
        step1: { value: "hello" },
        step2: { count: 42 },
      });
    });

    expect(result.current.funnelData.step1.value).toBe("hello");
    expect(result.current.funnelData.step2.count).toBe(42);
    expect(result.current.funnelData.step3).toEqual({ items: [] });
  });

  it("순차적으로 여러 번 업데이트할 수 있다", () => {
    const { result } = renderHook(() =>
      useFunnelData({
        initialData,
      }),
    );

    act(() => {
      result.current.updateData({ step1: { value: "first" } });
    });

    expect(result.current.funnelData.step1.value).toBe("first");

    act(() => {
      result.current.updateData({ step2: { count: 10 } });
    });

    expect(result.current.funnelData.step1.value).toBe("first");
    expect(result.current.funnelData.step2.count).toBe(10);
  });

  it("이전 데이터를 덮어쓴다", () => {
    const { result } = renderHook(() =>
      useFunnelData({
        initialData,
      }),
    );

    act(() => {
      result.current.updateData({ step1: { value: "first" } });
    });

    expect(result.current.funnelData.step1.value).toBe("first");

    act(() => {
      result.current.updateData({ step1: { value: "second" } });
    });

    expect(result.current.funnelData.step1.value).toBe("second");
  });

  it("배열 데이터도 업데이트할 수 있다", () => {
    const { result } = renderHook(() =>
      useFunnelData({
        initialData,
      }),
    );

    act(() => {
      result.current.updateData({ step3: { items: ["a", "b", "c"] } });
    });

    expect(result.current.funnelData.step3.items).toEqual(["a", "b", "c"]);
  });
});

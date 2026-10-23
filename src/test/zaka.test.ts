import { describe, expect, it } from "vitest";
import { whatsappLink, serviceMessage } from "@/lib/zaka";

describe("whatsapp links", () => {
  it("uses the shop number", () => {
    expect(whatsappLink()).toBe("https://wa.me/5513991489622");
  });
  it("prefills the selected service", () => {
    const url = whatsappLink(serviceMessage("Barba"));
    expect(decodeURIComponent(url.split("?text=")[1])).toContain("Barba");
  });
});

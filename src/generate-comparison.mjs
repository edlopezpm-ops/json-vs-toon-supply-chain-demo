import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { encode } from "@toon-format/toon";

const sourceData = {
  warehouseId: "WH-DAL-01",
  waveId: "WAVE-2026-0805-A",
  generatedAt: "2026-08-05T14:30:00Z",
  outboundOrders: [
    { orderId: "ORD-10481", customer: "Northstar Retail", priority: "High", status: "Picking", units: 42, destination: "Austin, TX", assignedZone: "A-01" },
    { orderId: "ORD-10482", customer: "Blue Ridge Market", priority: "Standard", status: "Allocated", units: 18, destination: "Denver, CO", assignedZone: "B-03" },
    { orderId: "ORD-10483", customer: "Harbor Home Goods", priority: "High", status: "Packed", units: 67, destination: "Tampa, FL", assignedZone: "A-02" },
    { orderId: "ORD-10484", customer: "Cedar Supply Co", priority: "Standard", status: "Picking", units: 24, destination: "Tulsa, OK", assignedZone: "C-01" },
    { orderId: "ORD-10485", customer: "Summit Outfitters", priority: "Expedite", status: "Quality Check", units: 12, destination: "Boise, ID", assignedZone: "A-01" },
    { orderId: "ORD-10486", customer: "Prairie Office", priority: "Standard", status: "Allocated", units: 35, destination: "Omaha, NE", assignedZone: "B-02" },
    { orderId: "ORD-10487", customer: "Metro Kitchen", priority: "High", status: "Picking", units: 51, destination: "Phoenix, AZ", assignedZone: "C-02" },
    { orderId: "ORD-10488", customer: "Lakeside Pharmacy", priority: "Expedite", status: "Packed", units: 9, destination: "Madison, WI", assignedZone: "A-03" }
  ]
};

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectRoot = dirname(scriptDirectory);
const outputDirectory = join(projectRoot, "output");
const jsonPath = join(outputDirectory, "warehouse-orders.json");
const toonPath = join(outputDirectory, "warehouse-orders.toon");

function measure(label, content) {
  return {
    Format: label,
    Characters: Array.from(content).length,
    "UTF-8 bytes": Buffer.byteLength(content, "utf8")
  };
}

function reduction(from, to) {
  return ((from - to) / from) * 100;
}

async function main() {
  const json = `${JSON.stringify(sourceData, null, 2)}\n`;
  const toon = `${encode(sourceData)}\n`;

  await mkdir(outputDirectory, { recursive: true });
  await Promise.all([
    writeFile(jsonPath, json, "utf8"),
    writeFile(toonPath, toon, "utf8")
  ]);

  const jsonMetrics = measure("JSON", json);
  const toonMetrics = measure("TOON", toon);
  const characterDifference = jsonMetrics.Characters - toonMetrics.Characters;
  const byteDifference = jsonMetrics["UTF-8 bytes"] - toonMetrics["UTF-8 bytes"];

  console.log("\nJSON vs TOON · Warehouse outbound wave\n");
  console.table([jsonMetrics, toonMetrics]);
  console.log(`Character reduction: ${characterDifference.toLocaleString("en-US")} (${reduction(jsonMetrics.Characters, toonMetrics.Characters).toFixed(1)}%)`);
  console.log(`UTF-8 byte reduction: ${byteDifference.toLocaleString("en-US")} (${reduction(jsonMetrics["UTF-8 bytes"], toonMetrics["UTF-8 bytes"]).toFixed(1)}%)`);
  console.log("Note: UTF-8 bytes and characters are not LLM token counts. Tokenization varies by model.\n");
  console.log("Generated files:");
  console.log(`  JSON  ${jsonPath}`);
  console.log(`  TOON  ${toonPath}\n`);
}

main().catch((error) => {
  console.error("Demo failed:", error instanceof Error ? error.message : error);
  process.exitCode = 1;
});

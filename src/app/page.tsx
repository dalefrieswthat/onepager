'use client';
import React from 'react';
import Image from 'next/image';

export default function DataDojoOnePager() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Data Dojo</h1>
        <p className="text-lg text-gray-600 mt-2">Turn chaos into clarity. Then automate it.</p>
      </div>

      <div className="text-center">
        <p className="text-md text-gray-500">A 3-phase AI framework to unify your data, generate insights, and automate action with intelligent agents tailored to your business.</p>
        <p className="text-sm text-gray-400 italic mt-1">All clients begin with our Data Foundation—then unlock deeper insights and automation as you grow.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-4 border rounded-2xl shadow">
          <h2 className="text-lg font-semibold text-center">Phase 1: Data Foundation</h2>
          <Image src="/onepager/images/Data Foundation Graphic.png" alt="Data Foundation Graphic" width={128} height={128} className="mx-auto my-4" />
          <p className="text-sm text-gray-700">We onboard your systems, normalize your data, and deploy a custom operational database that acts as a single source of truth across your operations.</p>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-4">
            <li>All data sources in sync</li>
            <li>Custom logic & terminology</li>
            <li>Natural language interface for querying your transactional data</li>
          </ul>
        </div>

        <div className="p-4 border rounded-2xl shadow">
          <h2 className="text-lg font-semibold text-center">Phase 2: Intelligence Layer</h2>
          <Image src="/onepager/images/Intelligence Layer Graphic.png" alt="Intelligence Layer Graphic" width={128} height={128} className="mx-auto my-4" />
          <p className="text-sm text-gray-700">We use AI and a microservice architecture to forecast, recommend, and learn. These models access your data foundation with precision.</p>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-4">
            <li>Demand & labor forecasting</li>
            <li>Smart recommendations</li>
            <li>Continuous improvement feedback loops</li>
            <li>RAG-based AI for smarter analyses</li>
          </ul>
        </div>

        <div className="p-4 border rounded-2xl shadow">
          <h2 className="text-lg font-semibold text-center">Phase 3: Agent Automation</h2>
          <Image src="/onepager/images/Agent Automation Graphic.png" alt="Agent Automation Graphic" width={128} height={128} className="mx-auto my-4" />
          <p className="text-sm text-gray-700">Deploy task-specific AI agents like a Promotions Bot, Inventory Bot, or Procurement Bot—each capable of action with or without human approval. If a bot doesn&apos;t yet exist for your needs, we&apos;ll build one custom to your workflows and goals.</p>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-4">
            <li>Agent-based workflow ownership</li>
            <li>Go-to query libraries</li>
            <li>Autonomous or approval-based execution</li>
          </ul>
        </div>
      </div>

      <div className="p-4 border rounded-2xl shadow bg-gray-50">
        <h2 className="text-lg font-semibold mb-2">AI Agent Examples</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-medium">Promotions Bot</h3>
            <p className="text-sm text-gray-600">Plans and launches targeted promotions.</p>
          </div>
          <div>
            <h3 className="font-medium">Inventory Bot</h3>
            <p className="text-sm text-gray-600">Monitors stock, flags anomalies, automates ordering.</p>
          </div>
          <div>
            <h3 className="font-medium">Procurement Bot</h3>
            <p className="text-sm text-gray-600">Places purchase orders based on forecasts.</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-700">Other agents include: <span className="text-gray-600">Menu Optimization Bot, Labor Scheduler Bot, Delivery Issue Resolution Bot, Customer Loyalty Bot, Waste Tracker Bot, Compliance Bot, Feedback Analyzer Bot, Reservation Optimizer Bot, Multi-Location Ops Bot, Margin Maximizer Bot.</span></p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-2xl shadow">
          <h2 className="text-md font-semibold mb-2 text-center">Benefits</h2>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Faster decisions, fewer mistakes</li>
            <li>Lower overhead through automation</li>
            <li>Custom-built for your logic</li>
            <li>Scale ops without scaling headcount</li>
          </ul>
        </div>
        <div className="p-4 border rounded-2xl shadow">
          <h2 className="text-md font-semibold mb-2 text-center">Pricing Overview</h2>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Setup fees vary based on your data sources and integration needs</li>
            <li>Custom quotes provided within 2 business days after a discovery meeting</li>
            <li>Phase 1: One-time setup fee + usage-based subscription</li>
            <li>Phase 2: Usage-based pricing</li>
            <li>Phase 3: Usage-based fees for prebuilt bots</li>
            <li className="ml-4">Custom bots available as modular add-on subscriptions</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        <p className="mt-4">Learn More: <a href="mailto:hello@disputedojo.com" className="text-blue-600 hover:underline">hello@disputedojo.com</a></p>
      </div>
    </div>
  );
}

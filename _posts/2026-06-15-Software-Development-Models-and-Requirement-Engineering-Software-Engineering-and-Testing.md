---
layout: default
title: "2. Software Development Models and Requirement Engineering"
category: "Programming"
---

# 2.1 Introduction – A Generic Process Model

## Definition

- A **Generic Process Model** is a framework that describes the **fundamental activities** carried out during software development.
- It provides a **structured approach** for building, delivering, and maintaining software systems.
- Almost all software process models are based on these common activities.

## Software Process

- A **Software Process** is a collection of activities, actions, and tasks performed to develop and maintain software.
- Defines **who does what, when, and how** during software development.

## Generic Process Framework Activities

### 1. Communication

- Involves interaction between **customer and development team**.
- Goal is to understand:
  - Business requirements
  - User needs
  - System constraints
- Activities:
  - Requirement gathering
  - Discussions
  - Interviews
  - Requirement analysis

### 2. Planning

- Defines project roadmap and management activities.
- Estimates:
  - Cost
  - Time
  - Resources
  - Risks
- Produces project schedules and milestones.

### 3. Modeling

- Creates representations of the software before coding.
- Focuses on:
  - System design
  - Architecture design
  - Database design
  - User interface design
- Helps identify problems early.

### 4. Construction

- Actual development phase.
- Includes:
  - Coding
  - Unit Testing
  - Integration Testing
- Converts design into working software.

### 5. Deployment

- Software is delivered to users.
- Activities:
  - Installation
  - User Training
  - Support
  - Maintenance
  - Feedback Collection

## Generic Process Model Diagram

```text
Communication
      ↓
Planning
      ↓
Modeling
      ↓
Construction
      ↓
Deployment
      ↓
Feedback
      ↺
```

## Umbrella Activities

- Activities performed throughout the software process.

### Important Umbrella Activities

- **Project Tracking and Control**
- **Risk Management**
- **Software Quality Assurance (SQA)**
- **Technical Reviews**
- **Measurement and Metrics**
- **Configuration Management**
- **Documentation Preparation**
- **Reuse Management**

## Characteristics of Generic Process Model

- **Systematic and Structured**
- Applicable to most software projects.
- Supports quality software development.
- Facilitates project monitoring and control.
- Encourages continuous feedback and improvement.
- Forms the basis for various SDLC models.

## Advantages

- **Clear Development Framework**
- **Better Project Management**
- **Improved Software Quality**
- **Early Detection of Errors**
- **Efficient Resource Utilization**
- **Enhanced Customer Communication**
- **Controlled Development Process**

## Limitations

- May require customization for specific projects.
- Not all projects follow activities in a strictly sequential manner.
- Large projects may require additional specialized processes.

## Relationship with SDLC Models

| SDLC Model | Uses Generic Process Activities |
|------------|--------------------------------|
| **Waterfall Model** | Sequential execution of activities |
| **Prototype Model** | Repeated communication and modeling |
| **Spiral Model** | Iterative execution with risk analysis |
| **Incremental Model** | Activities repeated for each increment |
| **Agile Model** | Continuous communication and deployment |

## Important Points

- Every software process fundamentally consists of:
  - **Communication**
  - **Planning**
  - **Modeling**
  - **Construction**
  - **Deployment**
- These activities are known as **Generic Process Framework Activities**.
- **Feedback** from deployment helps improve future versions.
- **Umbrella Activities** continue throughout the software lifecycle.
- The Generic Process Model serves as the foundation for all major **Software Development Life Cycle (SDLC) Models**.

<hr>

# 2.2 SDLC and Umbrella Activities

## Software Development Life Cycle (SDLC)

### Definition

- **SDLC (Software Development Life Cycle)** is a systematic process used for **planning, developing, testing, deploying, and maintaining software**.
- Provides a structured framework to produce **high-quality software** within **time and budget constraints**.
- Defines all activities performed throughout the software development process.

## Objectives of SDLC

- Develop **high-quality software**.
- Meet **customer requirements**.
- Complete projects within **budget and schedule**.
- Improve project management and control.
- Reduce development risks and costs.
- Ensure easy maintenance and future enhancements.

## Phases of SDLC

### 1. Requirement Analysis

- Gather and analyze user requirements.
- Identify:
  - Functional Requirements
  - Non-Functional Requirements
- Prepare **Software Requirement Specification (SRS)** document.

### 2. System Design

- Convert requirements into system design.
- Define:
  - Architecture
  - Database Design
  - User Interface Design
  - Module Design
- Produces design documents.

### 3. Implementation (Coding)

- Convert design into source code.
- Develop software modules according to specifications.
- Follow coding standards and guidelines.

### 4. Testing

- Verify and validate software.
- Detect and remove defects.
- Ensure software meets requirements.

#### Types of Testing
- Unit Testing
- Integration Testing
- System Testing
- Acceptance Testing

### 5. Deployment

- Deliver software to customers.
- Install and configure the system.
- Provide user training if required.

### 6. Maintenance

- Performed after software delivery.
- Activities:
  - Bug Fixing
  - Performance Improvement
  - Feature Enhancement
  - Adaptation to new requirements

## SDLC Diagram

```text
Requirement Analysis
         ↓
System Design
         ↓
Implementation
         ↓
Testing
         ↓
Deployment
         ↓
Maintenance
```

## Advantages of SDLC

- **Improved Software Quality**
- **Better Project Control**
- **Proper Documentation**
- **Reduced Development Risk**
- **Efficient Resource Management**
- **Customer Satisfaction**
- **Easy Maintenance**

## Limitations of SDLC

- Requires extensive planning.
- Changes may increase cost and effort.
- Documentation can be time-consuming.
- Some models may lack flexibility.

---

# Umbrella Activities

## Definition

- **Umbrella Activities** are activities that are carried out **throughout all phases of the SDLC**.
- They support, manage, monitor, and improve the software development process.
- Applicable across the entire project lifecycle.

## Major Umbrella Activities

### 1. Project Tracking and Control

- Monitors project progress.
- Compares actual progress with planned schedules.
- Takes corrective actions when necessary.

### 2. Risk Management

- Identifies potential risks.
- Analyzes impact and probability.
- Develops risk mitigation strategies.

### 3. Software Quality Assurance (SQA)

- Ensures adherence to quality standards.
- Verifies process and product quality.
- Improves reliability and correctness.

### 4. Formal Technical Reviews (FTR)

- Reviews software work products.
- Detects defects early.
- Improves software quality before testing.

### 5. Measurement and Metrics

- Collects quantitative data about:
  - Quality
  - Productivity
  - Performance
- Supports decision-making and improvement.

### 6. Software Configuration Management (SCM)

- Controls changes in software artifacts.
- Maintains version control.
- Prevents inconsistencies.

### 7. Reusability Management

- Identifies reusable software components.
- Encourages component reuse.
- Reduces development time and cost.

### 8. Work Product Preparation and Production

- Creation and maintenance of:
  - Reports
  - Documents
  - Manuals
  - Technical Specifications

## Umbrella Activities Diagram

```text
         SDLC
 ┌─────────────────┐
 │ Requirements    │
 │ Design          │
 │ Coding          │
 │ Testing         │
 │ Deployment      │
 │ Maintenance     │
 └─────────────────┘

Umbrella Activities Active Throughout:
• SQA
• SCM
• Risk Management
• Reviews
• Metrics
• Tracking & Control
• Documentation
```

## SDLC vs Umbrella Activities

| Feature | SDLC Activities | Umbrella Activities |
|----------|----------------|--------------------|
| **Purpose** | Develop software | Support and manage development |
| **Execution** | Sequential phases | Continuous throughout project |
| **Focus** | Product development | Quality, control, and management |
| **Examples** | Design, Coding, Testing | SQA, SCM, Risk Management |

## Important Points

- **SDLC** defines the major phases of software development.
- Core SDLC phases:
  - **Requirement Analysis**
  - **Design**
  - **Implementation**
  - **Testing**
  - **Deployment**
  - **Maintenance**
- **Umbrella Activities** run continuously across all SDLC phases.
- **SQA, SCM, Risk Management, Reviews, and Metrics** are the most frequently asked umbrella activities.
- Umbrella activities improve **quality, control, maintainability, and project success**.

<hr>

# 2.3 Waterfall Model

## Definition

- The **Waterfall Model** is the earliest and most widely known **linear sequential SDLC model**.
- Software development progresses through a series of **distinct phases**, where each phase must be completed before the next phase begins.
- The output of one phase becomes the input for the next phase.

## Principle

- Development flows **step-by-step in a downward direction**, similar to a waterfall.
- No phase starts until the previous phase is completed and approved.
- Best suited when requirements are **clear, stable, and well-defined**.

## Phases of Waterfall Model

### 1. Requirement Analysis

- Gather and analyze customer requirements.
- Define system functionalities and constraints.
- Prepare **Software Requirement Specification (SRS)** document.

### 2. System Design

- Convert requirements into system architecture and design.
- Define:
  - Database Design
  - Module Design
  - Interface Design
  - System Architecture

### 3. Implementation (Coding)

- Convert design into source code.
- Develop individual modules according to specifications.

### 4. Testing

- Verify and validate software.
- Identify and fix defects.
- Ensure software satisfies requirements.

### 5. Deployment

- Deliver and install software at the customer site.
- Make the system operational.

### 6. Maintenance

- Modify software after delivery.
- Activities include:
  - Corrective Maintenance
  - Adaptive Maintenance
  - Perfective Maintenance
  - Preventive Maintenance

## Waterfall Model Diagram

```text
Requirements
      ↓
System Design
      ↓
Implementation
      ↓
Testing
      ↓
Deployment
      ↓
Maintenance
```

## Characteristics

- **Sequential Development Process**
- **Documentation-Oriented**
- **Phase-by-Phase Execution**
- **Simple and Easy to Understand**
- **Limited Customer Involvement after Requirement Phase**
- **Minimal Overlapping of Activities**

## Advantages

- **Simple and Easy to Implement**
- **Easy Project Management**
- **Clearly Defined Phases**
- **Well-Structured Documentation**
- **Easy Progress Tracking**
- Suitable for small projects with stable requirements.
- Easier cost and schedule estimation.

## Disadvantages

- Difficult to accommodate requirement changes.
- Working software becomes available very late.
- High risk if requirements are incorrect.
- Limited customer feedback during development.
- Errors discovered late in testing phase.
- Not suitable for large and complex projects.

## Applications

### Suitable For

- Small Projects
- Academic Projects
- Government Projects with fixed requirements
- Systems with stable and well-understood requirements

### Not Suitable For

- Large Projects
- Dynamic Requirements
- Research-Oriented Projects
- Rapidly Changing Business Environments

## Waterfall Model Workflow

```text
Complete Phase 1
       ↓
Review & Approval
       ↓
Complete Phase 2
       ↓
Review & Approval
       ↓
Continue Sequentially
       ↓
Final Software Product
```

## Advantages vs Disadvantages

| Advantages | Disadvantages |
|------------|--------------|
| **Simple Structure** | Difficult to handle changes |
| **Easy Management** | Late testing and feedback |
| **Good Documentation** | High risk of failure if requirements are wrong |
| **Clear Milestones** | Working software available late |
| **Easy Cost Estimation** | Not suitable for complex projects |

## Important Features

- **Linear Sequential Model**
- **One phase completed before the next begins**
- **Heavy Documentation**
- **Requirement Stability is essential**
- **Customer involvement mainly at the beginning and end**
- **Most suitable when requirements are clearly known in advance**

## Important Points

- Also known as **Linear Sequential Model**.
- Each phase has **specific deliverables and review processes**.
- Changes are costly once development progresses to later phases.
- Testing starts only after coding is completed.
- One of the most frequently asked SDLC models in examinations.

<hr>

# 2.4 Spiral Model

## Definition

- The **Spiral Model** is a **risk-driven software development model** that combines features of the **Waterfall Model** and **Prototyping Model**.
- Development proceeds through a series of **iterations (spirals)**.
- Each spiral represents one phase of the software development process.
- Focuses on **risk identification, analysis, and reduction** before proceeding further.

## Proposed By

- Developed by **Barry Boehm** in **1988**.

## Basic Concept

- Software is developed in multiple cycles.
- Each cycle produces a more complete version of the system.
- Risk analysis is performed during every iteration.
- Customer feedback is obtained continuously.

## Four Main Activities (Quadrants) of Spiral Model

### 1. Planning

- Determine:
  - Objectives
  - Requirements
  - Constraints
  - Alternatives
- Define goals for the current iteration.

### 2. Risk Analysis

- Identify potential risks.
- Evaluate impact and probability.
- Develop strategies to eliminate or reduce risks.
- Most important phase of the Spiral Model.

### 3. Engineering

- Design, code, and test the software.
- Develop the next version or prototype of the product.

### 4. Customer Evaluation

- Customer reviews the developed version.
- Feedback is collected.
- Modifications are identified for the next cycle.

## Spiral Model Diagram

```text
          Customer
          Evaluation
                ↑
                │
Planning → Risk Analysis
    ↑             ↓
    └── Engineering ──┘

(Repeated in multiple spirals)
```

## Spiral Cycle

```text
1. Planning
      ↓
2. Risk Analysis
      ↓
3. Engineering
      ↓
4. Customer Evaluation
      ↓
Next Spiral (Iteration)
```

## Characteristics

- **Risk-Oriented Development**
- **Iterative and Incremental**
- **Continuous Customer Involvement**
- **Prototype-Based Approach**
- **Flexible Requirement Handling**
- **Suitable for Large and Complex Projects**

## Advantages

- **Excellent Risk Management**
- **Handles Requirement Changes Easily**
- **Continuous Customer Feedback**
- **Early Identification of Problems**
- **Improved Software Quality**
- **Suitable for Large and Critical Systems**
- **Progressive Refinement of Product**
- **Supports Prototyping**

## Disadvantages

- Complex to manage.
- High development cost.
- Requires risk analysis expertise.
- Not suitable for small projects.
- Documentation and management overhead are high.
- Project completion time may increase.

## Applications

### Suitable For

- Large Software Projects
- High-Risk Projects
- Mission-Critical Systems
- Defense and Military Applications
- Banking Systems
- Complex Enterprise Systems

### Not Suitable For

- Small Projects
- Low-Budget Projects
- Projects with simple requirements
- Short-duration projects

## Spiral Model vs Waterfall Model

| Feature | Spiral Model | Waterfall Model |
|----------|-------------|----------------|
| **Approach** | Iterative | Sequential |
| **Risk Analysis** | Major Activity | Minimal |
| **Requirement Changes** | Easily Handled | Difficult |
| **Customer Involvement** | Continuous | Limited |
| **Cost** | Higher | Lower |
| **Project Type** | Large & Complex | Small & Stable |

## Advantages over Waterfall Model

- Better handling of changing requirements.
- Continuous customer participation.
- Early risk detection and mitigation.
- Incremental development reduces project failure chances.
- Better quality through repeated evaluation.

## Limitations

- Success depends heavily on accurate risk assessment.
- Risk analysis can be expensive and time-consuming.
- Requires experienced project managers and analysts.
- Difficult to apply where risks cannot be clearly identified.

## Important Features

- **Risk Analysis is the core activity.**
- Development occurs through multiple **spirals (iterations)**.
- Every cycle results in a more complete version of the software.
- Combines **Waterfall + Prototyping** concepts.
- Customer feedback is obtained at the end of each iteration.

## Important Points

- Also known as the **Risk-Driven Process Model**.
- Proposed by **Barry Boehm (1988)**.
- Consists of four major activities:
  - **Planning**
  - **Risk Analysis**
  - **Engineering**
  - **Customer Evaluation**
- Best suited for **large, complex, and high-risk projects**.
- Main advantage: **effective risk management**.
- Main disadvantage: **high cost and complexity**.

<hr>

# 2.5 Prototyping Model

## Definition

- The **Prototyping Model** is a software development model in which a **working model (prototype)** of the system is developed before the actual software.
- The prototype helps users and developers **understand requirements more clearly**.
- It is mainly used when requirements are **unclear, incomplete, or frequently changing**.

## Prototype

- A **Prototype** is an early, simplified, and incomplete version of the software.
- Demonstrates system functionality, user interfaces, and workflows.
- Used to obtain customer feedback before final development.

## Objectives of Prototyping

- Clarify user requirements.
- Reduce misunderstandings between users and developers.
- Improve communication and feedback.
- Detect missing requirements early.
- Minimize development risks.
- Increase customer satisfaction.

## Phases of Prototyping Model

### 1. Requirement Gathering

- Collect preliminary requirements from users.
- Identify major functionalities and objectives.

### 2. Quick Design

- Prepare a rough design of:
  - User Interface
  - Input Screens
  - Output Reports
  - Basic System Flow

### 3. Prototype Development

- Develop a working prototype quickly.
- Focus on visible features rather than complete functionality.

### 4. Customer Evaluation

- Users review and test the prototype.
- Feedback and suggestions are collected.

### 5. Prototype Refinement

- Modify and improve the prototype based on feedback.
- Repeat evaluation and refinement until requirements are finalized.

### 6. Final System Development

- Develop the actual software using approved requirements.
- Perform coding, testing, deployment, and maintenance.

## Prototyping Model Diagram

```text
Requirement Gathering
          ↓
      Quick Design
          ↓
 Prototype Development
          ↓
 Customer Evaluation
          ↓
 Prototype Refinement
          ↺
     (Repeat Until
 Requirements Clear)
          ↓
 Final System Development
          ↓
 Testing & Deployment
```

## Types of Prototypes

### 1. Throwaway (Rapid) Prototype

- Developed to understand requirements.
- Discarded after requirements are finalized.
- Not used in the final product.

#### Advantages
- Fast requirement clarification.
- Low development risk.

### 2. Evolutionary Prototype

- Continuously refined and expanded.
- Eventually evolves into the final software product.
- Reused during actual development.

#### Advantages
- Continuous improvement.
- Better user involvement.

## Characteristics

- **User-Centered Development**
- **Iterative Process**
- **Frequent Customer Feedback**
- **Requirement Refinement**
- **Early System Visualization**
- **Flexible Development Approach**

## Advantages

- **Clear Understanding of Requirements**
- **Improved Customer Participation**
- **Early Detection of Errors**
- **Reduced Requirement Ambiguity**
- **Better User Satisfaction**
- **Lower Risk of Project Failure**
- **Improved Communication Between Users and Developers**
- **Useful for Complex User Interfaces**

## Disadvantages

- Frequent changes may increase cost.
- Users may mistake prototype for the final product.
- Excessive customer involvement may delay development.
- Poorly designed prototypes can lead to incorrect expectations.
- Documentation may receive less attention.

## Applications

### Suitable For

- Projects with unclear requirements.
- User Interface Intensive Systems.
- Online Applications.
- Web-Based Systems.
- Innovative or Research Projects.

### Not Suitable For

- Small projects with fixed requirements.
- Performance-Critical Systems.
- Safety-Critical Systems with strict specifications.

## Prototyping Model vs Waterfall Model

| Feature | Prototyping Model | Waterfall Model |
|----------|------------------|----------------|
| **Requirements** | Can be unclear initially | Must be clearly defined |
| **Customer Involvement** | High | Limited |
| **Flexibility** | High | Low |
| **Feedback** | Continuous | Mostly at beginning/end |
| **Risk of Requirement Errors** | Low | High |
| **Development Approach** | Iterative | Sequential |

## Advantages over Waterfall Model

- Better requirement understanding.
- Greater customer participation.
- Faster identification of missing features.
- Easier handling of requirement changes.
- Reduced chances of developing the wrong product.

## Limitations

- May increase development time due to repeated modifications.
- Scope creep can occur because of continuous changes.
- Cost may rise if iterations become excessive.
- Not suitable when requirements are already well understood.

## Important Features

- **Prototype acts as a preliminary working model.**
- **Customer feedback drives development.**
- **Requirements are refined through multiple iterations.**
- Focuses on understanding user needs before actual development.
- Helps reduce requirement-related failures.

## Important Points

- Best suited when **requirements are not clearly defined**.
- Main objective is **requirement clarification and validation**.
- Development follows the cycle:
  - **Design**
  - **Build Prototype**
  - **Evaluate**
  - **Refine**
- Two major types:
  - **Throwaway Prototype**
  - **Evolutionary Prototype**
- Main advantage: **better requirement understanding**.
- Main disadvantage: **possibility of increased cost and time due to repeated changes**.

<hr>

# 2.6 RAD (Rapid Application Development) Model

## Definition

- **RAD (Rapid Application Development)** is an **incremental software development model** that emphasizes **rapid prototyping**, **user involvement**, and **fast delivery** of software.
- It focuses on developing software in a short time using reusable components, CASE tools, and iterative development.
- Suitable when requirements are well understood and project deadlines are strict.

## Objective

- Reduce development time.
- Increase productivity.
- Deliver working software quickly.
- Incorporate continuous user feedback.
- Reuse existing software components wherever possible.

## Phases of RAD Model

### 1. Business Modeling

- Understand business functions and information flow.
- Identify:
  - Business objectives
  - Processes
  - Data movement
  - User requirements

### 2. Data Modeling

- Identify data objects required by the system.
- Define:
  - Data relationships
  - Data attributes
  - Data structures

### 3. Process Modeling

- Define processes required to manipulate data.
- Describe:
  - Data transformations
  - Business rules
  - Processing logic

### 4. Application Generation

- Actual system development begins.
- Uses:
  - Reusable components
  - Code generators
  - CASE Tools
  - Automated development tools
- Rapid construction of software modules.

### 5. Testing and Turnover

- Test developed modules.
- Integrate components.
- Deliver software to users.
- Obtain customer acceptance.

## RAD Model Diagram

```text
Business Modeling
         ↓
Data Modeling
         ↓
Process Modeling
         ↓
Application Generation
         ↓
Testing & Turnover
```

## Characteristics

- **Fast Development**
- **Iterative and Incremental**
- **High User Participation**
- **Component-Based Construction**
- **Time-Boxed Development**
- **Extensive Use of CASE Tools**
- **Rapid Prototyping**

## Key Features

- Development is divided into small modules.
- Modules are developed in parallel.
- Continuous customer involvement.
- Focus on quick delivery of working software.
- Heavy use of reusable software components.

## Advantages

- **Very Fast Development**
- **Reduced Development Time**
- **High Customer Involvement**
- **Quick Delivery of Software**
- **Improved Productivity**
- **Easy Requirement Validation**
- **Better Risk Management Through Frequent Feedback**
- **Reusable Components Reduce Coding Effort**

## Disadvantages

- Requires highly skilled developers.
- Not suitable for very large systems.
- High dependency on customer participation.
- Requires powerful development tools.
- Integration of modules can be challenging.
- Not suitable when requirements are unclear.

## Applications

### Suitable For

- Management Information Systems (MIS)
- Business Applications
- GUI-Based Systems
- Web Applications
- Projects with short deadlines
- Modular software projects

### Not Suitable For

- Large Complex Systems
- High-Performance Real-Time Systems
- Safety-Critical Applications
- Projects with unclear requirements

## RAD Model Workflow

```text
Requirements
      ↓
Develop Modules in Parallel
      ↓
Rapid Prototyping
      ↓
User Feedback
      ↓
Testing
      ↓
Final Product
```

## RAD vs Waterfall Model

| Feature | RAD Model | Waterfall Model |
|----------|-----------|----------------|
| **Development Speed** | Very Fast | Slow |
| **Customer Involvement** | High | Limited |
| **Flexibility** | High | Low |
| **Requirement Changes** | Easily Handled | Difficult |
| **Delivery** | Incremental | Final Delivery at End |
| **Reusability** | High | Low |

## RAD vs Prototyping Model

| Feature | RAD Model | Prototyping Model |
|----------|-----------|------------------|
| **Primary Goal** | Fast Development | Requirement Understanding |
| **Focus** | Rapid Delivery | Requirement Clarification |
| **Component Reuse** | Extensive | Limited |
| **Development Speed** | Higher | Moderate |
| **Customer Feedback** | Continuous | Continuous |

## Limitations

- Requires sufficient resources and skilled teams.
- Performance may suffer if development is rushed.
- Difficult to apply in projects requiring extensive integration.
- Success depends heavily on customer availability.

## Important Features

- **RAD = Rapid Development + User Involvement + Component Reuse**
- Uses **Business Modeling, Data Modeling, Process Modeling, Application Generation, and Testing** phases.
- Software is developed quickly through **parallel development of modules**.
- Emphasizes **speed, flexibility, and customer feedback**.
- Best suited for projects where **quick delivery is the highest priority**.

## Important Points

- Full form: **Rapid Application Development (RAD)**.
- Based on **incremental development** and **rapid prototyping**.
- Main goal is **short development time and fast delivery**.
- Relies heavily on:
  - **CASE Tools**
  - **Reusable Components**
  - **User Participation**
- Main advantage: **Rapid software delivery**.
- Main disadvantage: **Requires skilled teams and strong customer involvement**.

<hr>

# 2.7 Incremental Model

## Definition

- The **Incremental Model** is a software development model in which the system is developed and delivered in **small functional units called increments**.
- Each increment adds new functionality to the previously developed version.
- The final product is obtained after all increments are completed and integrated.
- Combines the principles of the **Waterfall Model** with **iterative development**.

## Basic Concept

- Software requirements are divided into multiple modules.
- Each module is designed, coded, tested, and delivered separately.
- Every increment produces a working version of the software.
- Customer feedback from one increment can be incorporated into the next increment.

## Phases in Each Increment

### 1. Requirement Analysis

- Identify requirements for a specific increment.
- Prioritize functionalities.

### 2. Design

- Design the selected modules and features.
- Prepare architecture and module specifications.

### 3. Implementation

- Develop the planned functionality.
- Perform coding according to design.

### 4. Testing

- Verify and validate the developed increment.
- Remove defects before release.

### 5. Delivery

- Deliver the working increment to users.
- Collect feedback for future increments.

## Incremental Model Diagram

```text
Requirements
      ↓

Increment 1
Analysis → Design → Coding → Testing → Release
                         ↓

Increment 2
Analysis → Design → Coding → Testing → Release
                         ↓

Increment 3
Analysis → Design → Coding → Testing → Release
                         ↓

Final Integrated System
```

## Working of Incremental Model

```text
System Requirements
         ↓
 Divide into Modules
         ↓
 Develop Increment 1
         ↓
 Deliver & Get Feedback
         ↓
 Develop Increment 2
         ↓
 Deliver & Get Feedback
         ↓
 Continue Until Complete
```

## Characteristics

- **Iterative Development**
- **Incremental Delivery**
- **Customer Feedback-Oriented**
- **Flexible Requirement Handling**
- **Early Working Software**
- **Modular Development Approach**
- **Progressive Enhancement of Product**

## Advantages

- **Early Delivery of Working Software**
- **Reduced Development Risk**
- **Easy Testing and Debugging**
- **Accommodates Requirement Changes**
- **Better Customer Feedback**
- **Simplified Project Management**
- **Lower Initial Delivery Cost**
- **Faster Availability of Important Features**

## Disadvantages

- Requires proper planning and system architecture.
- Integration may become complex.
- Repeated testing increases effort.
- Not suitable if the system cannot be modularized.
- Design issues in early increments may affect later increments.

## Applications

### Suitable For

- Large Projects
- Web Applications
- Business Systems
- Banking Systems
- E-Commerce Applications
- Projects with prioritized requirements

### Not Suitable For

- Small Simple Projects
- Systems requiring complete functionality from the beginning
- Projects with highly interdependent modules

## Incremental Model vs Waterfall Model

| Feature | Incremental Model | Waterfall Model |
|----------|------------------|----------------|
| **Development Style** | Iterative & Incremental | Sequential |
| **Software Delivery** | Multiple Releases | Single Final Release |
| **Customer Feedback** | Continuous | Limited |
| **Requirement Changes** | Easier to Handle | Difficult |
| **Risk Level** | Lower | Higher |
| **Working Software** | Available Early | Available Late |

## Incremental Model vs Prototyping Model

| Feature | Incremental Model | Prototyping Model |
|----------|------------------|------------------|
| **Goal** | Deliver Product in Parts | Clarify Requirements |
| **Output** | Working Product Increments | Prototype |
| **Development Focus** | Functional Modules | Requirement Understanding |
| **Final Product** | Built Through Increments | Developed After Prototype Approval |

## Advantages over Waterfall Model

- Earlier software delivery.
- Better customer involvement.
- Lower project risk.
- Easier modification and enhancement.
- Faster implementation of critical features.

## Limitations

- Requires a well-defined overall architecture.
- Integration challenges may arise.
- Management becomes difficult if increments are poorly planned.
- Additional effort needed for configuration management.

## Important Features

- Software is delivered in **multiple increments**.
- Each increment is a **complete mini-project** containing:
  - Analysis
  - Design
  - Coding
  - Testing
- Customer receives useful software early.
- New functionality is added progressively until the system is complete.
- Supports continuous improvement through feedback.

## Important Points

- Also known as **Evolutionary Development Model**.
- Based on the principle of **"Build a little, deliver a little."**
- Each increment provides a working version of the system.
- Suitable when requirements can be prioritized and divided into modules.
- Main advantage: **Early delivery of working software**.
- Main disadvantage: **Integration and architectural complexity**.

<hr>

# 2.8 Agile Model Principles

## Definition

- **Agile Model** is an iterative and incremental software development approach that focuses on **customer collaboration, flexibility, rapid delivery, and continuous improvement**.
- Development is carried out in small iterations called **sprints** or **increments**.
- Emphasizes adapting to changing requirements rather than following a rigid plan.

## Agile Manifesto

Agile is based on the following four core values:

### 1. Individuals and Interactions

- Greater importance to **people, communication, and teamwork**.
- More valuable than processes and tools.

### 2. Working Software

- Focus on delivering **working software** regularly.
- More important than extensive documentation.

### 3. Customer Collaboration

- Continuous involvement of customers throughout development.
- More important than contract negotiation.

### 4. Responding to Change

- Ability to adapt to changing requirements quickly.
- More important than strictly following a fixed plan.

## Agile Principles

### 1. Customer Satisfaction Through Early and Continuous Delivery

- Deliver useful software frequently.
- Obtain customer feedback regularly.
- Ensure customer needs are continuously met.

### 2. Welcome Changing Requirements

- Accept requirement changes even in later stages.
- Use changes to improve customer value and competitiveness.

### 3. Frequent Delivery of Working Software

- Deliver software in short iterations.
- Working software is the primary measure of progress.

### 4. Close Collaboration Between Business and Developers

- Customers and developers work together throughout the project.
- Improves communication and understanding.

### 5. Build Projects Around Motivated Individuals

- Provide support, trust, and resources.
- Encourage self-organizing teams.

### 6. Face-to-Face Communication

- Most effective method of information exchange.
- Reduces misunderstandings and delays.

### 7. Working Software as the Primary Measure of Progress

- Progress is measured by completed functionality.
- Not by documentation or reports.

### 8. Sustainable Development

- Maintain a constant development pace.
- Avoid excessive workload and burnout.

### 9. Continuous Attention to Technical Excellence

- Maintain high-quality design and coding practices.
- Improve maintainability and efficiency.

### 10. Simplicity

- Maximize the amount of work not done.
- Focus only on essential functionality.

### 11. Self-Organizing Teams

- Teams manage their own work and responsibilities.
- Encourages innovation and accountability.

### 12. Continuous Improvement

- Regularly evaluate processes and performance.
- Adapt and improve after each iteration.

## Agile Development Cycle

```text
Requirements
      ↓
Planning
      ↓
Design
      ↓
Development
      ↓
Testing
      ↓
Release
      ↓
Customer Feedback
      ↓
Next Iteration
```

## Characteristics of Agile Model

- **Iterative and Incremental Development**
- **Continuous Customer Involvement**
- **Rapid Delivery**
- **Flexible Requirement Handling**
- **Frequent Feedback**
- **Team Collaboration**
- **Adaptive Planning**
- **Continuous Improvement**

## Advantages

- **High Customer Satisfaction**
- **Quick Delivery of Software**
- **Easy Handling of Requirement Changes**
- **Reduced Project Risk**
- **Improved Product Quality**
- **Continuous Feedback and Improvement**
- **Better Team Collaboration**
- **Early Detection of Problems**

## Disadvantages

- Less emphasis on documentation.
- Difficult cost and schedule prediction.
- Requires active customer involvement.
- Scope may continuously expand.
- Not ideal for very large teams without proper coordination.

## Applications

### Suitable For

- Dynamic Business Applications
- Web Applications
- Mobile Applications
- Startups and Innovative Projects
- Projects with frequently changing requirements

### Not Suitable For

- Projects with fixed requirements.
- Safety-Critical Systems requiring extensive documentation.
- Highly regulated environments.

## Agile vs Waterfall Model

| Feature | Agile Model | Waterfall Model |
|----------|-------------|----------------|
| **Development Style** | Iterative | Sequential |
| **Requirement Changes** | Easily Accepted | Difficult |
| **Customer Involvement** | Continuous | Limited |
| **Delivery** | Frequent Releases | Single Final Release |
| **Flexibility** | High | Low |
| **Risk** | Lower | Higher |

## Agile vs Incremental Model

| Feature | Agile Model | Incremental Model |
|----------|-------------|------------------|
| **Feedback** | Continuous | Periodic |
| **Requirement Changes** | Highly Flexible | Moderately Flexible |
| **Customer Participation** | Very High | High |
| **Development Speed** | Fast | Moderate to Fast |

## Important Features

- Development occurs in **small iterations (sprints)**.
- Customer involvement is continuous.
- Focus on **working software rather than extensive documentation**.
- Requirements can change throughout development.
- Encourages teamwork, communication, and adaptability.

## Important Points

- Agile is based on **4 core values** and **12 principles**.
- Main focus:
  - **Customer Satisfaction**
  - **Working Software**
  - **Collaboration**
  - **Adaptability**
- Working software is considered the most important measure of progress.
- Best suited for projects with **changing requirements**.
- Main advantage: **Flexibility and rapid delivery**.
- Main disadvantage: **Reduced predictability and documentation**.

<hr>

# 2.8.1 Agile Process

## Definition

- **Agile Process** is an iterative and incremental software development process that emphasizes **rapid delivery, customer collaboration, continuous feedback, and adaptability to change**.
- Development is performed in short cycles called **Iterations** or **Sprints**.
- Each iteration delivers a working part of the software.

## Agile Process Flow

```text
Requirements
      ↓
Planning
      ↓
Design
      ↓
Development
      ↓
Testing
      ↓
Release
      ↓
Customer Feedback
      ↓
Next Iteration
```

## Steps in Agile Process

### 1. Requirement Gathering

- Collect customer requirements.
- Create and prioritize requirements.
- Requirements are maintained in a **Product Backlog**.

### 2. Planning

- Select requirements for the next iteration.
- Estimate effort, resources, and timeline.
- Define sprint goals.

### 3. Design

- Create lightweight and flexible designs.
- Focus on immediate development needs.

### 4. Development

- Implement selected features.
- Continuous coding and integration.

### 5. Testing

- Test each feature during development.
- Detect and fix defects early.

### 6. Release

- Deliver a working software increment.
- Make functionality available to users.

### 7. Feedback and Review

- Gather customer feedback.
- Identify improvements and modifications.
- Prepare for the next iteration.

## Characteristics of Agile Process

- **Iterative Development**
- **Incremental Delivery**
- **Continuous Customer Involvement**
- **Adaptive Planning**
- **Frequent Feedback**
- **Rapid Response to Change**
- **Continuous Testing and Integration**

## Benefits of Agile Process

- **Faster Delivery**
- **Improved Customer Satisfaction**
- **Reduced Risk**
- **Better Product Quality**
- **Early Problem Detection**
- **Flexible Requirement Management**
- **Continuous Improvement**

---

# 2.8.2 Scrum

## Definition

- **Scrum** is the most popular **Agile Framework** used for managing and developing software projects.
- It organizes work into short, fixed-duration iterations called **Sprints**.
- Focuses on teamwork, transparency, inspection, and adaptation.

## Scrum Framework

```text
Product Backlog
        ↓
   Sprint Planning
        ↓
      Sprint
        ↓
 Daily Scrum Meeting
        ↓
 Working Product Increment
        ↓
 Sprint Review
        ↓
Sprint Retrospective
        ↓
 Next Sprint
```

## Key Roles in Scrum

### 1. Product Owner

- Represents customer interests.
- Defines and prioritizes requirements.
- Maintains the Product Backlog.
- Decides feature priorities.

### 2. Scrum Master

- Facilitates Scrum activities.
- Removes obstacles faced by the team.
- Ensures Scrum principles are followed.
- Acts as a coordinator and mentor.

### 3. Development Team

- Designs, develops, tests, and delivers software.
- Self-organized and cross-functional team.
- Responsible for completing sprint goals.

## Scrum Artifacts

### 1. Product Backlog

- List of all project requirements and features.
- Maintained by Product Owner.
- Continuously updated and prioritized.

### 2. Sprint Backlog

- Subset of Product Backlog selected for a sprint.
- Contains tasks to be completed during the sprint.

### 3. Product Increment

- Working software produced at the end of a sprint.
- Potentially releasable version of the product.

## Scrum Events

### 1. Sprint

- Fixed development cycle.
- Usually lasts **1 to 4 weeks**.
- Produces a working software increment.

### 2. Sprint Planning

- Decide what work will be completed in the sprint.
- Define sprint objectives and tasks.

### 3. Daily Scrum Meeting

- Short daily meeting (usually 15 minutes).
- Team discusses:
  - What was completed yesterday?
  - What will be done today?
  - Any obstacles?

### 4. Sprint Review

- Demonstration of completed work.
- Stakeholders provide feedback.

### 5. Sprint Retrospective

- Team evaluates performance.
- Identifies improvements for future sprints.

## Scrum Lifecycle

```text
Product Backlog
        ↓
Sprint Planning
        ↓
Sprint Backlog
        ↓
Development + Testing
        ↓
Daily Scrum
        ↓
Product Increment
        ↓
Review & Retrospective
        ↓
Next Sprint
```

## Characteristics of Scrum

- **Iterative and Incremental**
- **Short Development Cycles**
- **Continuous Feedback**
- **Self-Organizing Teams**
- **Customer-Centric Development**
- **Rapid Delivery**
- **Transparency and Collaboration**

## Advantages of Scrum

- **Quick Delivery of Working Software**
- **Improved Team Productivity**
- **Better Customer Satisfaction**
- **Easy Handling of Requirement Changes**
- **Continuous Improvement**
- **Early Detection of Issues**
- **High Visibility of Project Progress**

## Disadvantages of Scrum

- Requires experienced and disciplined teams.
- Scope may change frequently.
- Difficult for very large teams.
- Heavy dependence on customer participation.
- Requires strong communication among team members.

## Agile Process vs Scrum

| Feature | Agile Process | Scrum |
|----------|--------------|--------|
| **Nature** | Development Philosophy | Agile Framework |
| **Focus** | Agile Principles | Agile Implementation |
| **Iterations** | Uses Iterations | Uses Sprints |
| **Roles** | Not Strictly Defined | Product Owner, Scrum Master, Team |
| **Meetings** | Flexible | Defined Scrum Events |

## Important Points

- **Agile Process** focuses on iterative development, customer collaboration, and continuous delivery.
- **Scrum** is a framework used to implement Agile principles.
- Scrum is based on:
  - **Roles**
  - **Artifacts**
  - **Events**
- Key Scrum Roles:
  - **Product Owner**
  - **Scrum Master**
  - **Development Team**
- Key Scrum Artifacts:
  - **Product Backlog**
  - **Sprint Backlog**
  - **Product Increment**
- Main advantage of Scrum: **rapid delivery with continuous feedback and improvement**.

<hr>

# 2.9 Requirement Engineering Tasks – Inception, Elicitation, Elaboration, Negotiation

## Requirement Engineering (RE)

### Definition

- **Requirement Engineering (RE)** is the process of **identifying, analyzing, documenting, validating, and managing software requirements**.
- Ensures that the developed software satisfies customer and business needs.
- Forms the foundation of successful software development.

## Requirement Engineering Process

```text
Inception
    ↓
Elicitation
    ↓
Elaboration
    ↓
Negotiation
    ↓
Specification
    ↓
Validation
    ↓
Requirement Management
```

---

## 1. Inception

### Definition

- Initial activity of Requirement Engineering.
- Establishes a basic understanding of:
  - Project objectives
  - Stakeholders
  - Business requirements
  - System scope

### Activities

- Identify stakeholders.
- Understand business needs.
- Define project goals.
- Determine system boundaries.
- Recognize major constraints.

### Outcome

- Initial understanding of the problem and project scope.

---

## 2. Elicitation

### Definition

- Process of gathering requirements from stakeholders.
- Helps discover customer expectations and system needs.

### Activities

- Collect functional requirements.
- Collect non-functional requirements.
- Understand user expectations.
- Identify constraints and business rules.

### Techniques Used

- Interviews
- Questionnaires
- Observation
- Record Review
- Workshops
- Brainstorming

### Outcome

- Raw set of stakeholder requirements.

---

## 3. Elaboration

### Definition

- Detailed analysis and refinement of gathered requirements.
- Converts vague requirements into precise specifications.

### Activities

- Analyze requirements.
- Identify relationships among requirements.
- Create models and diagrams.
- Resolve ambiguities.
- Define system behavior.

### Outcome

- Well-structured and detailed requirements.

---

## 4. Negotiation

### Definition

- Process of resolving conflicts among stakeholders regarding requirements.
- Prioritizes requirements based on feasibility, cost, time, and importance.

### Activities

- Resolve conflicting requirements.
- Prioritize features.
- Balance business needs and technical constraints.
- Reach agreement among stakeholders.

### Outcome

- Approved and prioritized requirement set.

---

## Importance of Requirement Engineering

- Reduces development errors.
- Improves software quality.
- Minimizes project risks.
- Enhances customer satisfaction.
- Prevents costly requirement changes later.

---

# 2.9.1 Fact-Finding Techniques

## Definition

- **Fact-Finding Techniques** are methods used to collect information about the existing system and user requirements.
- Used during the **Requirement Elicitation** phase.

## 1. Questionnaires

### Definition

- A set of written questions distributed to users and stakeholders.

### Advantages

- Low cost.
- Covers large number of respondents.
- Quick data collection.
- Easy analysis of responses.

### Disadvantages

- Limited interaction.
- Responses may be incomplete.
- No opportunity for clarification.

### Suitable When

- Large number of users are involved.
- Users are geographically dispersed.

---

## 2. Interviews

### Definition

- Direct communication between analyst and stakeholders.

### Types

#### Structured Interview

- Predefined questions.
- Fixed format.

#### Unstructured Interview

- Flexible discussion.
- Open-ended questions.

### Advantages

- Detailed information gathering.
- Immediate clarification possible.
- Better understanding of user needs.

### Disadvantages

- Time-consuming.
- Expensive for large groups.
- Depends on interviewer skill.

### Suitable When

- Detailed requirement understanding is needed.

---

## 3. Observation

### Definition

- Analyst directly observes users performing their tasks.

### Advantages

- Provides real-world information.
- Reveals actual workflow.
- Identifies hidden problems.

### Disadvantages

- Time-consuming.
- User behavior may change during observation.
- Limited coverage.

### Suitable When

- Understanding existing processes is important.

---

## 4. Record Review

### Definition

- Examination of existing documents, reports, files, and records.

### Sources

- Forms
- Reports
- Manuals
- Databases
- Organizational documents

### Advantages

- Provides historical information.
- Low cost.
- Helps understand existing systems.

### Disadvantages

- Records may be outdated.
- Missing or incomplete information.

### Suitable When

- Existing system documentation is available.

---

## Comparison of Fact-Finding Techniques

| Technique | Major Advantage | Major Disadvantage |
|------------|----------------|-------------------|
| **Questionnaires** | Large coverage | Limited interaction |
| **Interviews** | Detailed information | Time-consuming |
| **Observation** | Real-world understanding | User behavior may change |
| **Record Review** | Historical data available | Records may be outdated |

---

# 2.9.2 Feasibility Study

## Definition

- **Feasibility Study** is the process of evaluating whether a proposed system is practical and beneficial for implementation.
- Determines whether the project should proceed or not.
- Conducted before actual system development.

## Objectives

- Assess project viability.
- Identify risks and constraints.
- Estimate costs and benefits.
- Support management decision-making.

## Types of Feasibility

### 1. Technical Feasibility

- Determines whether required technology and technical resources are available.

#### Evaluation Factors

- Hardware availability
- Software availability
- Technical expertise
- Infrastructure support

### 2. Economic Feasibility

- Evaluates financial viability of the project.

#### Evaluation Factors

- Development Cost
- Operational Cost
- Expected Benefits
- Return on Investment (ROI)

### 3. Operational Feasibility

- Determines whether the system will function effectively within the organization.

#### Evaluation Factors

- User acceptance
- Organizational support
- Operational procedures
- Training requirements

### 4. Schedule Feasibility

- Determines whether the project can be completed within the required timeframe.

#### Evaluation Factors

- Project deadlines
- Resource availability
- Development schedule

### 5. Legal Feasibility

- Checks compliance with laws, regulations, and organizational policies.

#### Evaluation Factors

- Licensing requirements
- Data protection laws
- Government regulations

## Feasibility Study Process

```text
Identify Problem
       ↓
Analyze Requirements
       ↓
Evaluate Feasibility
(Technical, Economic,
Operational, Schedule, Legal)
       ↓
Cost-Benefit Analysis
       ↓
Feasibility Report
       ↓
Management Decision
```

## Advantages

- Reduces project risk.
- Avoids investment in unsuccessful projects.
- Improves decision-making.
- Identifies resource requirements.
- Increases project success probability.

## Feasibility Report

### Contents

- Problem Description
- Alternative Solutions
- Feasibility Analysis
- Cost-Benefit Analysis
- Recommendations
- Final Conclusion

## Important Points

- Requirement Engineering begins with:
  - **Inception**
  - **Elicitation**
  - **Elaboration**
  - **Negotiation**
- Fact-finding techniques are mainly used during **Elicitation**.
- Most commonly used techniques:
  - **Questionnaires**
  - **Interviews**
  - **Observation**
  - **Record Review**
- Feasibility Study determines whether the project is:
  - **Technically Feasible**
  - **Economically Feasible**
  - **Operationally Feasible**
  - **Schedule Feasible**
  - **Legally Feasible**
- Feasibility Study is performed **before development begins**.

<hr>

# 2.10 SRS (Software Requirement Specification)

## Definition

- **SRS (Software Requirement Specification)** is a formal document that describes **all functional and non-functional requirements** of a software system.
- Acts as an agreement between **customer and developer**.
- Serves as the foundation for design, development, testing, and maintenance.

## IEEE Definition

- An **SRS** is a document that completely specifies the behavior and requirements of a software system.

## Purpose of SRS

- Clearly define system requirements.
- Provide a basis for system design.
- Facilitate communication between stakeholders.
- Serve as a reference throughout development.
- Reduce misunderstandings and requirement ambiguities.

## Contents of SRS

### 1. Introduction

- Purpose of the system.
- Scope of the project.
- Definitions and abbreviations.
- References.

### 2. Overall Description

- Product perspective.
- Product functions.
- User characteristics.
- Assumptions and constraints.

### 3. Specific Requirements

#### Functional Requirements

- Describe what the system should do.
- Define system services and functionalities.

##### Examples

- User Registration
- Login System
- Report Generation
- Payment Processing

#### Non-Functional Requirements

- Describe quality attributes and constraints.

##### Examples

- Performance
- Reliability
- Security
- Usability
- Scalability

### 4. External Interface Requirements

- User Interface
- Hardware Interface
- Software Interface
- Communication Interface

### 5. System Models and Diagrams

- Use Case Diagrams
- DFDs
- ER Diagrams
- UML Diagrams

## Importance of SRS

- Provides a clear understanding of requirements.
- Acts as a blueprint for development.
- Helps estimate cost, time, and resources.
- Facilitates testing and validation.
- Reduces project risk.
- Supports maintenance and future enhancements.

## SRS Development Process

```text
Requirement Gathering
         ↓
Requirement Analysis
         ↓
Requirement Documentation
         ↓
SRS Preparation
         ↓
Review & Validation
         ↓
Approved SRS
```

## Advantages of SRS

- **Clear Requirement Definition**
- **Better Communication**
- **Improved Project Planning**
- **Reduced Development Errors**
- **Easy Testing and Validation**
- **Reference for Maintenance**
- **Improved Software Quality**

## Limitations of Poor SRS

- Requirement ambiguity.
- Project delays.
- Increased development cost.
- Frequent requirement conflicts.
- Higher defect rates.
- Customer dissatisfaction.

---

# 2.10.1 Characteristics of a Good SRS

## Definition

- A good SRS should clearly and completely describe system requirements so that developers, testers, and customers interpret them in the same way.

## Characteristics of a Good SRS

### 1. Correct

- Every requirement accurately represents customer needs.
- No incorrect or unnecessary requirements.

### 2. Unambiguous

- Each requirement has only one interpretation.
- Avoid vague and confusing statements.

#### Example

- ❌ "System should be fast."
- ✔ "System response time should be less than 2 seconds."

### 3. Complete

- Contains all required functionalities and constraints.
- Covers all system behaviors and exceptional conditions.

### 4. Consistent

- No conflicting requirements.
- All requirements support each other.

### 5. Verifiable (Testable)

- Requirements can be tested and validated.
- Objective criteria should exist for verification.

#### Example

- "System shall support 500 concurrent users."

### 6. Ranked/Prioritized

- Requirements should be prioritized according to:
  - Importance
  - Risk
  - Stability

### 7. Modifiable

- Easy to update and maintain.
- Changes can be incorporated without affecting the entire document.

### 8. Traceable

- Every requirement can be traced back to its source.
- Supports forward and backward tracking.

#### Types of Traceability

- **Backward Traceability** → Requirement to source.
- **Forward Traceability** → Requirement to design, code, and tests.

### 9. Feasible

- Requirements must be technically and economically achievable.
- Should be implementable within available resources.

### 10. Understandable

- Easy for customers, developers, and testers to understand.
- Uses simple and clear language.

## Characteristics Summary Table

| Characteristic | Meaning |
|---------------|---------|
| **Correct** | Represents actual customer needs |
| **Unambiguous** | Only one interpretation |
| **Complete** | All requirements included |
| **Consistent** | No conflicts among requirements |
| **Verifiable** | Can be tested |
| **Prioritized** | Requirements ranked by importance |
| **Modifiable** | Easy to update |
| **Traceable** | Source and impact can be tracked |
| **Feasible** | Practical and implementable |
| **Understandable** | Easy to read and interpret |

## SRS Structure Diagram

```text
SRS
│
├── Introduction
├── Overall Description
├── Functional Requirements
├── Non-Functional Requirements
├── Interface Requirements
├── Constraints
├── Models/Diagrams
└── Appendices
```

## Important Points

- **SRS = Foundation of Software Development**.
- Prepared after requirement analysis.
- Used by:
  - Developers
  - Testers
  - Project Managers
  - Customers
- Contains:
  - Functional Requirements
  - Non-Functional Requirements
  - Interfaces
  - Constraints
- Most important characteristics:
  - **Correct**
  - **Complete**
  - **Consistent**
  - **Unambiguous**
  - **Verifiable**
  - **Traceable**

<hr> 

# 2.11 Introduction to Object-Oriented Modelling and Design (OOMD)

## Definition

- **Object-Oriented Modelling and Design (OOMD)** is a methodology used to analyze, design, and develop software systems using **objects, classes, and their interactions**.
- It models a system as a collection of objects that represent real-world entities.
- OOMD focuses on **data and behavior together**, unlike traditional function-oriented approaches.

## Object-Oriented Approach

- System is viewed as a collection of interacting objects.
- Each object contains:
  - **Attributes (Data)**
  - **Methods (Functions/Operations)**
- Objects communicate through **messages**.

## Basic Concepts of OOMD

### 1. Object

- An **Object** is an instance of a class.
- Represents a real-world entity.

#### Characteristics

- Identity
- State
- Behavior

#### Example

```text
Object: Student

State:
- Roll No
- Name

Behavior:
- Register()
- AttendExam()
```

---

### 2. Class

- A **Class** is a blueprint or template for creating objects.
- Defines common attributes and methods.

#### Example

```text
Class: Student

Attributes:
- RollNo
- Name

Methods:
- Register()
- Display()
```

---

### 3. Attributes

- Characteristics or properties of an object.
- Represent object data.

#### Example

```text
Student
- RollNo
- Name
- Age
```

---

### 4. Methods

- Functions performed by objects.
- Define object behavior.

#### Example

```text
Student
- Register()
- UpdateRecord()
- DisplayDetails()
```

---

### 5. Encapsulation

#### Definition

- Wrapping data and methods into a single unit (class).
- Protects data from unauthorized access.

#### Benefits

- Data Security
- Improved Maintainability
- Better Modularity

---

### 6. Abstraction

#### Definition

- Showing essential features while hiding implementation details.

#### Example

```text
ATM Machine

Visible:
- Withdraw Money
- Check Balance

Hidden:
- Internal Processing Logic
```

#### Benefits

- Reduces complexity.
- Improves understandability.

---

### 7. Inheritance

#### Definition

- Mechanism by which one class acquires properties and methods of another class.

#### Example

```text
Vehicle
   ↑
 Car
```

- Car inherits features of Vehicle.

#### Benefits

- Code Reusability
- Reduced Duplication
- Easier Maintenance

---

### 8. Polymorphism

#### Definition

- Ability of the same method to behave differently in different situations.

#### Example

```text
Draw()

Circle → Draw Circle
Rectangle → Draw Rectangle
```

#### Benefits

- Flexibility
- Extensibility

---

### 9. Message Passing

#### Definition

- Objects communicate by sending messages to each other.

#### Example

```text
Customer → PlaceOrder()
Order → GenerateBill()
```

---

## Object-Oriented Modelling

### Definition

- Process of identifying objects, classes, attributes, relationships, and interactions in a system.

### Activities

- Identify Objects
- Identify Classes
- Define Relationships
- Model Interactions
- Create UML Diagrams

## Object-Oriented Design

### Definition

- Process of transforming object-oriented models into software design specifications.

### Activities

- Class Design
- Interface Design
- Database Design
- Component Design
- Architecture Design

## OOMD Process

```text
Requirement Analysis
         ↓
Object-Oriented Analysis
         ↓
Object Modelling
         ↓
Object-Oriented Design
         ↓
Implementation
         ↓
Testing
```

## Advantages of OOMD

- **Reusability**
- **Modularity**
- **Maintainability**
- **Scalability**
- **Flexibility**
- **Reduced Development Time**
- **Improved Software Quality**
- **Easy Testing and Debugging**
- **Better Representation of Real-World Systems**

## Disadvantages of OOMD

- More complex than procedural design.
- Requires skilled developers.
- Initial design effort may be higher.
- Not ideal for very small projects.

## OOMD vs Function-Oriented Approach

| Feature | OOMD | Function-Oriented Approach |
|----------|------|---------------------------|
| **Focus** | Objects & Data | Functions |
| **Reusability** | High | Low |
| **Maintenance** | Easy | Difficult |
| **Security** | Better (Encapsulation) | Less |
| **Scalability** | High | Limited |
| **Real-World Representation** | Excellent | Moderate |

## Relationship Among OOP Concepts

```text
Class
  ↓
Object
  ↓
Attributes + Methods

OOP Features
├─ Encapsulation
├─ Abstraction
├─ Inheritance
├─ Polymorphism
└─ Message Passing
```

## Important Points

- OOMD models software using **objects and classes**.
- Fundamental concepts:
  - **Object**
  - **Class**
  - **Encapsulation**
  - **Abstraction**
  - **Inheritance**
  - **Polymorphism**
  - **Message Passing**
- Object-Oriented Modelling focuses on **analysis and representation**.
- Object-Oriented Design focuses on **implementation planning**.
- Major benefit: **high reusability, maintainability, and scalability**.
- OOMD closely represents **real-world systems**, making software easier to understand and develop.

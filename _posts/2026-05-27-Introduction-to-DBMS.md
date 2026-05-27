---
layout: default
title: "Introduction to DBMS"
category: "DBMS"
---
# Introduction to DBMS

<table style="width:100%; border-collapse:collapse; border:1px solid #000; font-family:'Times New Roman', serif;">
    
    <tr style="background:#ecec8a; color:blue; font-weight:bold; text-align:center;">
        <th style="border:1px solid #000; padding:8px; text-align:left;">Unit I</th>
        <th style="border:1px solid #000; padding:8px;">Introduction</th>
        <th style="border:1px solid #000; padding:8px;">06 Hrs.</th>
    </tr>

    <tr>
        <td style="padding:4px 12px;">1.1</td>
        <td colspan="2" style="padding:4px 12px;">Introduction to DBMS</td>
    </tr>

    <tr>
        <td style="padding:4px 12px;">1.2</td>
        <td colspan="2" style="padding:4px 12px;">File system Vs. DBMS</td>
    </tr>

    <tr>
        <td style="padding:4px 12px;">1.3</td>
        <td colspan="2" style="padding:4px 12px;">Data models - relational, hierarchical, network</td>
    </tr>

    <tr>
        <td style="padding:4px 12px;">1.4</td>
        <td colspan="2" style="padding:4px 12px;">Levels of abstraction</td>
    </tr>

    <tr>
        <td style="padding:4px 12px;">1.5</td>
        <td colspan="2" style="padding:4px 12px;">Data independence</td>
    </tr>

    <tr>
        <td style="padding:4px 12px;">1.6</td>
        <td colspan="2" style="padding:4px 12px;">Structure of DBMS</td>
    </tr>

    <tr>
        <td style="padding:4px 12px;">1.7</td>
        <td colspan="2" style="padding:4px 12px;">Users of DBMS</td>
    </tr>

    <tr>
        <td style="padding:4px 12px;">1.8</td>
        <td colspan="2" style="padding:4px 12px;">Advantages and disadvantages of DBMS</td>
    </tr>

</table>

# Introduction to DBMS

## What is DBMS?

A **Database Management System (DBMS)** is software that allows users to create, store, organize, retrieve, and manage data efficiently in the form of a database. It acts as an interface between the database and the user/application programs.

A DBMS ensures that data is stored systematically and can be accessed, updated, and manipulated easily without unnecessary redundancy or inconsistency.

**Definition:**
A DBMS is a collection of interrelated data along with programs that help users access and manage the data efficiently.

Examples of popular DBMS software include:

* MySQL
* Oracle
* PostgreSQL
* Microsoft SQL Server
* MongoDB

---

## Need for DBMS

Before DBMS, organizations used traditional file systems for storing data. File systems had several limitations such as redundancy, inconsistency, poor security, and difficulty in data sharing.

DBMS was introduced to overcome these problems.

### Major Needs of DBMS

* Efficient storage and retrieval of data
* Reduction of data redundancy
* Data consistency and integrity
* Better security mechanisms
* Concurrent access by multiple users
* Backup and recovery facilities
* Easy data sharing among users
* Centralized control of data

---

## Components of DBMS

A DBMS consists of several important components that work together to manage databases.

### 1. Hardware

Physical devices used for database operations.
Examples:

* Hard disks
* Servers
* Memory devices
* Client computers

### 2. Software

Programs used to control and manage databases.
Examples:

* DBMS software
* Operating system
* Application software

### 3. Data

The most important component. Data may be:

* User data
* Metadata (data about data)

### 4. Procedures

Rules and instructions for using and managing the database system.

### 5. Database Access Language

Language used to access and manipulate databases.
Example:

* SQL (Structured Query Language)

### 6. Users

People who interact with the DBMS such as:

* Database Administrators (DBA)
* Application programmers
* End users

---

## Characteristics of DBMS

### 1. Data Abstraction

DBMS hides unnecessary details from users and shows only required information.

### 2. Data Independence

Changes in database structure do not affect application programs.

### 3. Reduced Data Redundancy

Duplicate data storage is minimized.

### 4. Data Consistency

Ensures uniform and accurate data throughout the database.

### 5. Data Security

Unauthorized users cannot access sensitive information.

### 6. Concurrent Access

Multiple users can access data simultaneously without conflict.

### 7. Backup and Recovery

DBMS provides mechanisms to recover data after system failures.

### 8. Integrity Constraints

Rules are enforced to maintain valid and accurate data.

---

## Functions of DBMS

A DBMS performs several important functions:

### Data Storage Management

Stores and organizes large volumes of data efficiently.

### Data Retrieval

Allows users to search and retrieve required information quickly.

### Data Manipulation

Supports insertion, deletion, and updating of data.

### Transaction Management

Ensures reliable execution of database transactions.

### Concurrency Control

Controls simultaneous access to data by multiple users.

### Security Management

Provides authentication and authorization mechanisms.

### Backup and Recovery

Protects data from accidental loss or system crashes.

### Integrity Enforcement

Maintains correctness and validity of data.

---

## Advantages of DBMS

### 1. Reduced Redundancy

Duplicate copies of data are minimized.

### 2. Improved Data Sharing

Data can be shared among multiple users and applications.

### 3. Better Data Security

Access control mechanisms protect confidential information.

### 4. Data Consistency

Ensures accurate and uniform data across the system.

### 5. Efficient Data Access

Data retrieval becomes faster and easier.

### 6. Backup and Recovery

Data can be restored after failures.

### 7. Improved Decision Making

Accurate and timely information supports better decisions.

---

## Disadvantages of DBMS

### 1. High Cost

DBMS software and hardware can be expensive.

### 2. Complexity

Requires skilled professionals for management and maintenance.

### 3. Large Size

DBMS systems require significant storage and memory resources.

### 4. Performance Overhead

Complex DBMS operations may slow down performance for small applications.

### 5. Security Risks

Centralized data storage may become a target for attacks if not secured properly.

---

## Applications of DBMS

DBMS is widely used in many fields:

| Field                       | Application                          |
| --------------------------- | ------------------------------------ |
| Banking                     | Account management, transactions     |
| Education                   | Student records, examination systems |
| Healthcare                  | Patient records, hospital management |
| E-commerce                  | Product and customer management      |
| Railway/Airline Reservation | Ticket booking systems               |
| Telecommunications          | Billing and customer management      |

---

## Conclusion

A Database Management System is an essential software system used for efficient storage, management, and retrieval of data. It overcomes the limitations of traditional file systems by providing security, consistency, reduced redundancy, and concurrent access. Due to its reliability and efficiency, DBMS has become a fundamental component in modern organizations and applications.


# File System vs DBMS

## Introduction

Before the development of Database Management Systems (DBMS), data was stored using traditional **File Systems**. In a file system, data is stored in separate files managed directly by the operating system. Although file systems were simple and suitable for small applications, they suffered from many limitations such as redundancy, inconsistency, and poor security.

A **DBMS** was developed to overcome these problems by providing centralized and efficient management of data.

---

## File System

A **File System** is a method of storing and organizing data in separate files on a computer storage device. Each application program maintains its own files independently.

### Characteristics of File System

* Data is stored in individual files.
* Programs directly access and manage files.
* No centralized control of data.
* Data sharing is difficult.
* High chances of redundancy and inconsistency.

### Example

In a college management system:

* Student information may be stored in one file.
* Fee details in another file.
* Examination records in separate files.

This can lead to duplication of student information in multiple files.

---

## Database Management System (DBMS)

A **DBMS** is software that manages databases and provides an organized way to store, retrieve, and manipulate data.

In DBMS:

* Data is centrally controlled.
* Multiple users can access data simultaneously.
* Redundancy and inconsistency are minimized.

### Example

In a DBMS-based college system:

* Student data is stored once in a centralized database.
* Different departments access the same database when needed.

---

# Difference Between File System and DBMS

| Basis                     | File System                   | DBMS                                 |
| ------------------------- | ----------------------------- | ------------------------------------ |
| Definition                | Stores data in separate files | Stores data in a structured database |
| Data Redundancy           | High redundancy               | Redundancy is minimized              |
| Data Consistency          | Difficult to maintain         | Consistency is maintained            |
| Data Sharing              | Limited sharing               | Easy sharing among users             |
| Security                  | Less secure                   | Strong security mechanisms           |
| Data Integrity            | Difficult to enforce          | Integrity constraints supported      |
| Backup & Recovery         | Limited support               | Automatic backup and recovery        |
| Concurrency Control       | Not supported properly        | Supports multi-user access           |
| Data Independence         | Not available                 | Available                            |
| Query Processing          | Manual programming required   | Uses query languages like SQL        |
| Relationship Between Data | Difficult to establish        | Relationships easily maintained      |
| Complexity                | Simple to use                 | More complex                         |
| Cost                      | Low cost                      | Higher cost                          |
| Scalability               | Suitable for small systems    | Suitable for large systems           |

---

## Problems in File System

### 1. Data Redundancy

The same data may be stored in multiple files.

**Example:**
Student name stored in admission file, fee file, and exam file.

### 2. Data Inconsistency

When duplicate data is updated in one file but not in others, inconsistent data occurs.

### 3. Difficulty in Accessing Data

Searching and retrieving information becomes difficult and time-consuming.

### 4. Data Isolation

Data is scattered across different files and formats.

### 5. Security Problems

File systems provide limited security features.

### 6. Lack of Backup and Recovery

Recovery after system failure is difficult.

### 7. Concurrent Access Problems

Multiple users accessing the same file may cause conflicts.

---

## Advantages of DBMS over File System

### Reduced Redundancy

DBMS stores data centrally, reducing duplication.

### Improved Consistency

Since data is stored once, updates remain consistent.

### Better Security

Access permissions and authentication protect data.

### Efficient Data Retrieval

SQL queries help retrieve data quickly.

### Concurrent Access

Multiple users can work simultaneously without conflicts.

### Backup and Recovery

Automatic recovery mechanisms protect against data loss.

### Data Integrity

Rules and constraints maintain accurate data.

### Data Independence

Changes in database structure do not affect application programs significantly.

---

## When File System is Preferred

Although DBMS is superior in most cases, file systems may still be used:

* In small applications
* When data volume is low
* Where cost must be minimized
* In simple standalone systems

---

## Conclusion

A File System is a traditional method of storing data in separate files, whereas a DBMS provides a centralized, organized, and secure approach to data management. File systems suffer from redundancy, inconsistency, and poor security, while DBMS overcomes these limitations by providing efficient storage, integrity, concurrency control, and better data management. Therefore, DBMS is preferred for modern large-scale applications and organizations.

# Data Models – Relational, Hierarchical, Network

## Introduction to Data Models

A **Data Model** is a collection of concepts used to describe the structure of a database, relationships among data, and constraints on data. It defines how data is stored, organized, connected, and manipulated in a database system.

Data models provide a logical framework for database design and help users understand how data is represented inside the DBMS.

---

## Importance of Data Models

* Provide structure for organizing data
* Define relationships between data items
* Help in database design
* Improve data consistency and integrity
* Make data retrieval easier
* Serve as a communication tool between developers and users

---

# Types of Data Models

The major data models are:

1. Hierarchical Data Model
2. Network Data Model
3. Relational Data Model

---

# Hierarchical Data Model

## Definition

The **Hierarchical Data Model** organizes data in the form of a tree-like structure where records are connected through parent-child relationships.

* One parent can have many children.
* Each child can have only one parent.
* Data is stored in hierarchical levels.

This model resembles an organizational chart or family tree.

---

## Structure of Hierarchical Model

* Topmost node is called the **Root**
* Intermediate nodes represent parent records
* Bottom nodes represent child records

### Example

A college database:

* College

  * Department

    * Teacher
    * Student

Here:

* College is the parent
* Department is child of college
* Teacher and Student are children of department

---

## Characteristics

* Uses tree structure
* Supports one-to-many relationship
* Fast access through predefined paths
* Child record depends on parent record

---

## Advantages of Hierarchical Model

### Simple Structure

Easy to understand for small hierarchical data.

### Fast Data Access

Accessing records through predefined paths is efficient.

### Data Integrity

Parent-child relationship maintains consistency.

### Security

Access control can be applied at different levels.

---

## Disadvantages of Hierarchical Model

### No Many-to-Many Relationship

Cannot efficiently represent many-to-many relationships.

### Complex Modification

Changing database structure is difficult.

### Data Redundancy

Duplicate data may occur.

### Dependency on Parent

Child records cannot exist independently.

---

## Applications

* File systems
* Organization charts
* XML databases
* Banking systems (older systems)

---

---

# Network Data Model

## Definition

The **Network Data Model** organizes data using records and links. It is an extension of the hierarchical model.

In this model:

* A child can have multiple parents.
* Many-to-many relationships are supported.

Data is represented as a graph structure rather than a tree.

---

## Structure of Network Model

* Records are connected using pointers or links.
* Relationships are represented through sets.

### Example

In a university database:

* A student can enroll in multiple courses.
* A course can have multiple students.

This creates a many-to-many relationship.

---

## Characteristics

* Graph-based structure
* Supports many-to-many relationships
* Flexible connections between records
* Uses pointers for navigation

---

## Advantages of Network Model

### Supports Complex Relationships

Can handle many-to-many relationships effectively.

### Faster Data Access

Pointer-based navigation provides quick access.

### Reduced Redundancy

Data duplication is lower compared to hierarchical model.

### Flexibility

Records can have multiple parent records.

---

## Disadvantages of Network Model

### Complex Structure

Difficult to design and maintain.

### Difficult Navigation

Users must understand physical links between records.

### High Programming Complexity

Requires detailed procedural access methods.

### Poor Data Independence

Changes in structure may affect applications.

---

## Applications

* Telecommunication systems
* Transportation networks
* Complex inventory systems

---

---

# Relational Data Model

## Definition

The **Relational Data Model** stores data in the form of tables called relations.

* Rows represent records (tuples)
* Columns represent attributes (fields)

It was proposed by **E. F. Codd** in 1970 and is the most widely used data model today.

---

## Structure of Relational Model

A relation consists of:

| Student_ID | Name  | Course |
| ---------- | ----- | ------ |
| 101        | Rahul | BCA    |
| 102        | Priya | MCA    |

### Important Terms

* **Relation** → Table
* **Tuple** → Row
* **Attribute** → Column
* **Primary Key** → Unique identifier
* **Foreign Key** → Connects tables

---

## Characteristics

* Data stored in tables
* Supports relationships using keys
* Uses SQL for operations
* Provides high data independence

---

## Advantages of Relational Model

### Simple and Easy to Use

Tabular structure is easy to understand.

### Reduced Redundancy

Normalization minimizes duplicate data.

### Data Integrity

Constraints maintain valid data.

### Flexibility

Easy to modify tables and relationships.

### Powerful Query Language

SQL allows efficient data retrieval and manipulation.

### Data Independence

Changes in physical storage do not affect applications.

---

## Disadvantages of Relational Model

### Complex for Large Systems

Handling huge databases may affect performance.

### Memory Consumption

Requires more storage and processing power.

### Slower Performance

Complex joins can reduce speed.

### Difficult Object Representation

Not ideal for multimedia or complex objects.

---

## Applications

* Banking systems
* E-commerce websites
* Library management systems
* Hospital management systems
* University databases

---

# Comparison Between Hierarchical, Network, and Relational Models

| Feature           | Hierarchical Model | Network Model | Relational Model           |
| ----------------- | ------------------ | ------------- | -------------------------- |
| Structure         | Tree               | Graph         | Table                      |
| Relationship Type | One-to-Many        | Many-to-Many  | Supports all relationships |
| Flexibility       | Less flexible      | More flexible | Highly flexible            |
| Complexity        | Simple             | Complex       | Moderate                   |
| Data Access       | Path-based         | Pointer-based | SQL-based                  |
| Redundancy        | High               | Moderate      | Low                        |
| Ease of Use       | Easy               | Difficult     | Very easy                  |
| Data Independence | Low                | Low           | High                       |
| Popularity        | Less used          | Rarely used   | Most widely used           |

---

## Conclusion

Data models define how data is organized and managed within a DBMS. The hierarchical model uses a tree structure and supports one-to-many relationships, while the network model extends it to support many-to-many relationships through graph structures. The relational model organizes data into tables and is the most widely used model because of its simplicity, flexibility, data independence, and powerful query capabilities. Understanding these models is essential for designing efficient database systems.

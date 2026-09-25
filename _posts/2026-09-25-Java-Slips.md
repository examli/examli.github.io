---

layout: default
title: "Java"
category: "Programming"
---


# Slip 1

## Q1 — Addition using Command Line Arguments

```java
class Add {
    public static void main(String[] args) {
        int a = Integer.parseInt(args[0]);
        int b = Integer.parseInt(args[1]);

        System.out.println("Addition = " + (a + b));
    }
}
```

Run:

```bash
java Add 10 20
```

## Q2 — Book using Array of Objects

```java
import java.util.*;

class Book {
    int bookId;
    String bookName;
    double price;

    void accept() {
        Scanner sc = new Scanner(System.in);

        System.out.print("Book ID: ");
        bookId = sc.nextInt();

        System.out.print("Book Name: ");
        bookName = sc.next();

        System.out.print("Price: ");
        price = sc.nextDouble();
    }

    void display() {
        System.out.println(bookId + " " + bookName + " " + price);
    }

    public static void main(String[] args) {
        Book b[] = new Book[5];

        for (int i = 0; i < 5; i++) {
            b[i] = new Book();
            b[i].accept();
        }

        for (Book x : b)
            x.display();
    }
}
```

---

# Slip 2

## Q1 — Cities in Descending Order

```java
import java.util.*;

class Cities {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of cities: ");
        int n = sc.nextInt();

        String city[] = new String[n];

        for (int i = 0; i < n; i++)
            city[i] = sc.next();

        Arrays.sort(city, Collections.reverseOrder());

        for (String c : city)
            System.out.println(c);
    }
}
```

## Q2 — Hashtable Employee Name and Salary

```java
import java.util.*;

class EmployeeHash {
    public static void main(String[] args) {
        Hashtable<String, Double> ht = new Hashtable<>();

        ht.put("Rahul", 25000.0);
        ht.put("Amit", 30000.0);
        ht.put("Raj", 28000.0);

        System.out.println(ht);

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter employee name: ");
        String name = sc.next();

        if (ht.containsKey(name))
            System.out.println("Salary = " + ht.get(name));
        else
            System.out.println("Employee not found");
    }
}
```

---

# Slip 3

## Q1 — Employee with Maximum Salary

```java
import java.util.*;

class Employee {
    int id;
    String name;
    double salary;

    void accept() {
        Scanner sc = new Scanner(System.in);

        System.out.print("ID: ");
        id = sc.nextInt();

        System.out.print("Name: ");
        name = sc.next();

        System.out.print("Salary: ");
        salary = sc.nextDouble();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of employees: ");
        int n = sc.nextInt();

        Employee e[] = new Employee[n];

        for (int i = 0; i < n; i++) {
            e[i] = new Employee();
            e[i].accept();
        }

        Employee max = e[0];

        for (int i = 1; i < n; i++) {
            if (e[i].salary > max.salary)
                max = e[i];
        }

        System.out.println("Maximum Salary Employee = " + max.name);
    }
}
```

## Q2 — Abstract Shape: Sphere and Cylinder

```java
abstract class Shape {
    abstract void area();
    abstract void volume();
}

class Sphere extends Shape {
    double r = 5;

    void area() {
        System.out.println("Sphere Area = " + (4 * Math.PI * r * r));
    }

    void volume() {
        System.out.println("Sphere Volume = " +
                ((4.0 / 3) * Math.PI * r * r * r));
    }
}

class Cylinder extends Shape {
    double r = 5, h = 10;

    void area() {
        System.out.println("Cylinder Area = " +
                (2 * Math.PI * r * (r + h)));
    }

    void volume() {
        System.out.println("Cylinder Volume = " +
                (Math.PI * r * r * h));
    }
}

class Main {
    public static void main(String[] args) {
        Sphere s = new Sphere();
        s.area();
        s.volume();

        Cylinder c = new Cylinder();
        c.area();
        c.volume();
    }
}
```

---

# Slip 4

## Q1 — Positive or Negative

```java
import java.util.*;

class PositiveNegative {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number: ");
        int n = sc.nextInt();

        if (n > 0)
            System.out.println("Positive");
        else if (n < 0)
            System.out.println("Negative");
        else
            System.out.println("Zero");
    }
}
```

## Q2 — String Package

### `Con.java`

```java
package StringOperation;

public class Con {
    public void concat(String a, String b) {
        System.out.println("Concatenated String = " + a + b);
    }
}
```

### `Comp.java`

```java
package StringOperation;

public class Comp {
    public void compare(String a, String b) {
        if (a.equals(b))
            System.out.println("Strings are equal");
        else
            System.out.println("Strings are not equal");
    }
}
```

### `Main.java`

```java
import StringOperation.*;

class Main {
    public static void main(String[] args) {
        Con c = new Con();
        Comp cp = new Comp();

        c.concat("Hello", "World");
        cp.compare("Java", "Java");
    }
}
```

---

# Slip 5

## Q1 — Display File in Reverse

```java
import java.io.*;

class ReverseFile {
    public static void main(String[] args) throws Exception {

        FileReader fr = new FileReader("test.txt");

        String s = "";
        int ch;

        while ((ch = fr.read()) != -1)
            s += (char) ch;

        fr.close();

        for (int i = s.length() - 1; i >= 0; i--)
            System.out.print(s.charAt(i));
    }
}
```

## Q2 — Shape Method Overriding

```java
abstract class Shape {
    abstract void area();
    abstract void volume();
}

class Sphere extends Shape {
    double r = 5;

    void area() {
        System.out.println("Sphere Area = " + 4 * Math.PI * r * r);
    }

    void volume() {
        System.out.println("Sphere Volume = " +
                (4.0 / 3) * Math.PI * r * r * r);
    }
}

class Cylinder extends Shape {
    double r = 5, h = 10;

    void area() {
        System.out.println("Cylinder Area = " +
                2 * Math.PI * r * (r + h));
    }

    void volume() {
        System.out.println("Cylinder Volume = " +
                Math.PI * r * r * h);
    }
}

class Main {
    public static void main(String[] args) {
        Shape s = new Sphere();
        s.area();
        s.volume();

        s = new Cylinder();
        s.area();
        s.volume();
    }
}
```

---

# Slip 6

## Q1 — User Defined Incorrect Password Exception

```java
import java.util.*;

class IncorrectPasswordException extends Exception {
    IncorrectPasswordException(String msg) {
        super(msg);
    }
}

class Login {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Username: ");
        String user = sc.next();

        System.out.print("Password: ");
        String pass = sc.next();

        try {
            if (!user.equals(pass))
                throw new IncorrectPasswordException(
                    "Incorrect Password Exception");

            System.out.println("Login successful");
        }
        catch (IncorrectPasswordException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

## Q2 — Count Characters, Lines and Words

```java
import java.io.*;

class FileCount {
    public static void main(String[] args) throws Exception {

        BufferedReader br =
            new BufferedReader(new FileReader("test.txt"));

        int lines = 0;
        int words = 0;
        int characters = 0;

        String line;

        while ((line = br.readLine()) != null) {
            lines++;
            characters += line.length();

            String arr[] = line.trim().split("\\s+");

            if (!line.trim().isEmpty())
                words += arr.length;
        }

        br.close();

        System.out.println("Lines = " + lines);
        System.out.println("Words = " + words);
        System.out.println("Characters = " + characters);
    }
}
```

---

# Slip 7

## Q1 — Package Game

### `Indoor.java`

```java
package game;

public class Indoor {
    public Indoor() {
        System.out.println("Indoor Players:");
    }

    public Indoor(String name) {
        System.out.println("Indoor Player: " + name);
    }

    public void display() {
        System.out.println("Chess");
        System.out.println("Carrom");
    }
}
```

### `Outdoor.java`

```java
package game;

public class Outdoor {
    public Outdoor() {
        System.out.println("Outdoor Players:");
    }

    public Outdoor(String name) {
        System.out.println("Outdoor Player: " + name);
    }

    public void display() {
        System.out.println("Cricket");
        System.out.println("Football");
    }
}
```

### `Main.java`

```java
import game.*;

class Main {
    public static void main(String[] args) {
        Indoor i = new Indoor();
        i.display();

        Outdoor o = new Outdoor();
        o.display();
    }
}
```

## Q2 — Student Constructors

```java
import java.util.*;

class Student {
    int rollno;
    String name;
    double percentage;

    Student() {
        rollno = 0;
        name = "Unknown";
        percentage = 0;
    }

    Student(int rollno, String name, double percentage) {
        this.rollno = rollno;
        this.name = name;
        this.percentage = percentage;
    }

    void display() {
        System.out.println(
            rollno + " " + name + " " + percentage);
    }

    public static void main(String[] args) {
        Student s[] = new Student[5];

        Scanner sc = new Scanner(System.in);

        for (int i = 0; i < 5; i++) {
            System.out.print("Roll No: ");
            int r = sc.nextInt();

            System.out.print("Name: ");
            String n = sc.next();

            System.out.print("Percentage: ");
            double p = sc.nextDouble();

            s[i] = new Student(r, n, p);
        }

        for (Student x : s)
            x.display();
    }
}
```

---

# Slip 8

## Q1 — ArrayList Cities

```java
import java.util.*;

class CityList {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<String> cities = new ArrayList<>();

        System.out.print("Enter number of cities: ");
        int n = sc.nextInt();

        for (int i = 0; i < n; i++)
            cities.add(sc.next());

        System.out.println(cities);

        cities.clear();

        System.out.println("After removing: " + cities);
    }
}
```

## Q2 — Customer Sort by Bill Amount

```java
import java.util.*;

class Customer {
    int cid;
    String cname;
    double billAmount;

    Customer(int id, String name, double bill) {
        cid = id;
        cname = name;
        billAmount = bill;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter n: ");
        int n = sc.nextInt();

        Customer c[] = new Customer[n];

        for (int i = 0; i < n; i++) {
            System.out.print("ID: ");
            int id = sc.nextInt();

            System.out.print("Name: ");
            String name = sc.next();

            System.out.print("Bill: ");
            double bill = sc.nextDouble();

            c[i] = new Customer(id, name, bill);
        }

        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n; j++) {
                if (c[i].billAmount > c[j].billAmount) {
                    Customer temp = c[i];
                    c[i] = c[j];
                    c[j] = temp;
                }
            }
        }

        for (Customer x : c)
            System.out.println(
                x.cid + " " + x.cname + " " + x.billAmount);
    }
}
```

---

# Slip 9

## Q1 — Cylinder and Circle using `super`

```java
class Circle {
    double r;

    Circle(double r) {
        this.r = r;
    }

    void area() {
        System.out.println("Circle Area = " +
                Math.PI * r * r);
    }
}

class Cylinder extends Circle {
    double h;

    Cylinder(double r, double h) {
        super(r);
        this.h = h;
    }

    void area() {
        super.area();

        System.out.println("Cylinder Area = " +
                2 * Math.PI * r * (r + h));
    }
}

class Main {
    public static void main(String[] args) {
        Cylinder c = new Cylinder(5, 10);
        c.area();
    }
}
```

## Q2 — MyDate Constructors

```java
class MyDate {
    int dd, mm, yy;

    MyDate() {
        dd = 1;
        mm = 1;
        yy = 2026;
    }

    MyDate(int dd, int mm, int yy) {
        this.dd = dd;
        this.mm = mm;
        this.yy = yy;
    }

    void display() {
        System.out.println(
            this.dd + "-" + this.mm + "-" + this.yy);
    }

    public static void main(String[] args) {
        MyDate d1 = new MyDate();
        MyDate d2 = new MyDate(25, 9, 2026);

        d1.display();
        d2.display();
    }
}
```

---

# Slip 10

## Q1 — Hashtable with Enumeration

```java
import java.util.*;

class StudentHash {
    public static void main(String[] args) {

        Hashtable<String, String> ht = new Hashtable<>();

        ht.put("9876543210", "Rahul");
        ht.put("9876543211", "Amit");
        ht.put("9876543212", "Raj");

        Enumeration<String> e = ht.keys();

        while (e.hasMoreElements()) {
            String mobile = e.nextElement();
            System.out.println(
                mobile + " : " + ht.get(mobile));
        }
    }
}
```

## Q2 — Vehicle Inheritance

```java
import java.util.*;

class Vehicle {
    String company;
    double price;

    void accept() {
        Scanner sc = new Scanner(System.in);

        System.out.print("Company: ");
        company = sc.next();

        System.out.print("Price: ");
        price = sc.nextDouble();
    }
}

class LightMotorVehicle extends Vehicle {
    double mileage;

    void accept() {
        super.accept();

        Scanner sc = new Scanner(System.in);

        System.out.print("Mileage: ");
        mileage = sc.nextDouble();
    }

    void display() {
        System.out.println(
            company + " " + price + " " + mileage);
    }
}

class HeavyMotorVehicle extends Vehicle {
    double capacity;

    void accept() {
        super.accept();

        Scanner sc = new Scanner(System.in);

        System.out.print("Capacity: ");
        capacity = sc.nextDouble();
    }

    void display() {
        System.out.println(
            company + " " + price + " " + capacity);
    }
}

class Main {
    public static void main(String[] args) {
        LightMotorVehicle l = new LightMotorVehicle();
        l.accept();
        l.display();

        HeavyMotorVehicle h = new HeavyMotorVehicle();
        h.accept();
        h.display();
    }
}
```

---

# Slip 11

## Q1 — Prime Numbers using BufferedReader

```java
import java.io.*;

class Prime {
    public static void main(String[] args) throws Exception {

        BufferedReader br =
            new BufferedReader(new InputStreamReader(System.in));

        System.out.print("Enter number: ");
        int n = Integer.parseInt(br.readLine());

        for (int i = 2; i <= n; i++) {

            boolean prime = true;

            for (int j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    prime = false;
                    break;
                }
            }

            if (prime)
                System.out.print(i + " ");
        }
    }
}
```

## Q2 — Copy File into Another in Uppercase

```java
import java.io.*;

class UpperCopy {
    public static void main(String[] args) throws Exception {

        BufferedReader br =
            new BufferedReader(new FileReader("file1.txt"));

        FileWriter fw =
            new FileWriter("file2.txt");

        String line;

        while ((line = br.readLine()) != null) {
            fw.write(line.toUpperCase());
            fw.write("\n");
        }

        br.close();
        fw.close();

        System.out.println("File copied.");
    }
}
```

---

# Slip 12

## Q1 — Interface Shape, Circle and Sphere

```java
interface Shape {
    void area();
}

class Circle implements Shape {
    final double r = 5;

    public void area() {
        System.out.println("Circle Area = " +
                Math.PI * r * r);
    }
}

class Sphere implements Shape {
    final double r = 5;

    public void area() {
        System.out.println("Sphere Area = " +
                4 * Math.PI * r * r);
    }
}

class Main {
    public static void main(String[] args) {
        Circle c = new Circle();
        Sphere s = new Sphere();

        c.area();
        s.area();
    }
}
```

## Q2 — MyNumber

```java
class MyNumber {
    private int n;

    MyNumber() {
        n = 0;
    }

    MyNumber(int n) {
        this.n = n;
    }

    void isNegative() {
        System.out.println(n < 0 ? "Negative" : "Not Negative");
    }

    void isPositive() {
        System.out.println(n > 0 ? "Positive" : "Not Positive");
    }

    void isOdd() {
        System.out.println(n % 2 != 0 ? "Odd" : "Not Odd");
    }

    void isEven() {
        System.out.println(n % 2 == 0 ? "Even" : "Not Even");
    }

    public static void main(String[] args) {
        int n = Integer.parseInt(args[0]);

        MyNumber obj = new MyNumber(n);

        obj.isNegative();
        obj.isPositive();
        obj.isOdd();
        obj.isEven();
    }
}
```

---

# Slip 13

## Q1 — Zero Exception and Prime

```java
import java.util.*;

class ZeroException extends Exception {
    ZeroException(String msg) {
        super(msg);
    }
}

class PrimeCheck {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number: ");
        int n = sc.nextInt();

        try {
            if (n == 0)
                throw new ZeroException("Number is 0");

            boolean prime = true;

            for (int i = 2; i <= n / 2; i++) {
                if (n % i == 0) {
                    prime = false;
                    break;
                }
            }

            if (prime)
                System.out.println("Prime");
            else
                System.out.println("Not Prime");
        }
        catch (ZeroException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

## Q2 — Doctor Name Validation

```java
import java.util.*;

class InvalidNameException extends Exception {
    InvalidNameException(String msg) {
        super(msg);
    }
}

class Doctor {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Doctor Name: ");
        String name = sc.nextLine();

        try {
            if (!name.matches("[a-zA-Z ]+"))
                throw new InvalidNameException("Name is Invalid");

            System.out.println("Valid Name: " + name);
        }
        catch (InvalidNameException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

---

# Slip 14

## Q1 — ArrayList Cities

```java
import java.util.*;

class Cities {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        ArrayList<String> list = new ArrayList<>();

        System.out.print("Enter number of cities: ");
        int n = sc.nextInt();

        for (int i = 0; i < n; i++)
            list.add(sc.next());

        System.out.println("Cities = " + list);

        list.clear();

        System.out.println("After remove = " + list);
    }
}
```

## Q2 — Read File and Display Uppercase

```java
import java.io.*;

class UpperCase {
    public static void main(String[] args) throws Exception {

        BufferedReader br =
            new BufferedReader(new FileReader("abc.txt"));

        String line;

        while ((line = br.readLine()) != null)
            System.out.println(line.toUpperCase());

        br.close();
    }
}
```

---

# Slip 15

## Q1 — Reverse Number using Command Line

```java
class Reverse {
    public static void main(String[] args) {

        int n = Integer.parseInt(args[0]);
        int rev = 0;

        while (n != 0) {
            int digit = n % 10;
            rev = rev * 10 + digit;
            n = n / 10;
        }

        System.out.println("Reverse = " + rev);
    }
}
```

## Q2 — Traffic Signal using Runnable

```java
class Traffic implements Runnable {

    public void run() {
        try {
            System.out.println("RED");
            Thread.sleep(2000);

            System.out.println("YELLOW");
            Thread.sleep(1000);

            System.out.println("GREEN");
        }
        catch (Exception e) {
            System.out.println(e);
        }
    }

    public static void main(String[] args) {
        Traffic t = new Traffic();

        Thread th = new Thread(t);

        th.start();
    }
}
```

---

# Slip 16

## Q1 — Fibonacci Series

```java
import java.util.*;

class Fibonacci {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter n: ");
        int n = sc.nextInt();

        int a = 0, b = 1;

        for (int i = 1; i <= n; i++) {
            System.out.print(a + " ");

            int c = a + b;
            a = b;
            b = c;
        }
    }
}
```

## Q2 — Sort HashMap by Keys

```java
import java.util.*;

class SortHashMap {
    public static void main(String[] args) {

        HashMap<Integer, String> map = new HashMap<>();

        map.put(3, "C");
        map.put(1, "A");
        map.put(2, "B");

        System.out.println("Before Sorting:");
        System.out.println(map);

        TreeMap<Integer, String> sorted =
            new TreeMap<>(map);

        System.out.println("After Sorting:");
        System.out.println(sorted);
    }
}
```

---

# Slip 17

## Q1 — Interface Integer Positive/Negative

```java
import java.util.*;

interface IntegerCheck {
    void check(int n);
}

class NumberCheck implements IntegerCheck {

    public void check(int n) {
        if (n > 0)
            System.out.println("Positive");
        else if (n < 0)
            System.out.println("Negative");
        else
            System.out.println("Zero");
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number: ");
        int n = sc.nextInt();

        NumberCheck obj = new NumberCheck();

        obj.check(n);
    }
}
```

## Q2 — LinkedList Integer

```java
import java.util.*;

class IntegerList {
    public static void main(String[] args) {

        LinkedList<Integer> list =
            new LinkedList<>();

        list.add(10);
        list.add(20);
        list.add(30);

        list.addFirst(5);

        list.removeLast();

        System.out.println("List = " + list);
        System.out.println("Size = " + list.size());
    }
}
```

---

# Slip 18

## Q1 — Sum and Ascending Array

```java
import java.util.*;

class ArrayProgram {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter n: ");
        int n = sc.nextInt();

        int a[] = new int[n];
        int sum = 0;

        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
            sum += a[i];
        }

        Arrays.sort(a);

        System.out.println("Sum = " + sum);

        System.out.println("Ascending:");
        for (int x : a)
            System.out.print(x + " ");
    }
}
```

## Q2 — Product with Minimum Price

```java
import java.util.*;

class Product {
    int id;
    String name;
    double price;

    void accept() {
        Scanner sc = new Scanner(System.in);

        System.out.print("ID: ");
        id = sc.nextInt();

        System.out.print("Name: ");
        name = sc.next();

        System.out.print("Price: ");
        price = sc.nextDouble();
    }

    public static void main(String[] args) {

        Product p[] = new Product[5];

        for (int i = 0; i < 5; i++) {
            p[i] = new Product();
            p[i].accept();
        }

        Product min = p[0];

        for (int i = 1; i < 5; i++) {
            if (p[i].price < min.price)
                min = p[i];
        }

        System.out.println(
            "Minimum Price Product = " + min.name);
    }
}
```

---

# Slip 19

## Q1 — Circle and Sphere using final

```java
interface Shape {
    void area();
}

class Circle implements Shape {

    final double PI = 3.142;
    double r = 5;

    public void area() {
        System.out.println(
            "Circle Area = " + PI * r * r);
    }
}

class Sphere implements Shape {

    final double PI = 3.142;
    double r = 5;

    public void area() {
        System.out.println(
            "Sphere Area = " + 4 * PI * r * r);
    }
}

class Main {
    public static void main(String[] args) {

        Circle c = new Circle();
        Sphere s = new Sphere();

        c.area();
        s.area();
    }
}
```

## Q2 — Student Names and Roll Numbers

```java
import java.util.*;

class StudentCollection {
    public static void main(String[] args) {

        HashMap<String, Integer> students =
            new HashMap<>();

        students.put("Rahul", 1);
        students.put("Amit", 2);
        students.put("Raj", 3);

        students.put("Neha", 4);

        students.remove("Raj");

        Scanner sc = new Scanner(System.in);

        System.out.print("Search student: ");
        String name = sc.next();

        if (students.containsKey(name))
            System.out.println(
                "Roll No = " + students.get(name));
        else
            System.out.println("Student not found");
    }
}
```

---

# Slip 20

## Q1 — Multiplication Table using BufferedReader

```java
import java.io.*;

class Table {
    public static void main(String[] args) throws Exception {

        BufferedReader br =
            new BufferedReader(new InputStreamReader(System.in));

        System.out.print("Enter number: ");
        int n = Integer.parseInt(br.readLine());

        for (int i = 1; i <= 10; i++)
            System.out.println(
                n + " x " + i + " = " + (n * i));
    }
}
```

## Q2 — City Names and STD Codes

```java
import java.util.*;

class CityCode {
    public static void main(String[] args) {

        HashMap<String, Integer> cities =
            new HashMap<>();

        cities.put("Pune", 20);
        cities.put("Mumbai", 22);
        cities.put("Delhi", 11);

        cities.put("Nashik", 253);

        cities.remove("Delhi");

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter city: ");
        String city = sc.next();

        if (cities.containsKey(city))
            System.out.println(
                "STD Code = " + cities.get(city));
        else
            System.out.println("City not found");
    }
}
```

---

# Slip 21

## Q1 — Cylinder and Circle using super

```java
class Circle {
    double r;

    Circle(double r) {
        this.r = r;
    }

    void area() {
        System.out.println(
            "Circle Area = " + Math.PI * r * r);
    }
}

class Cylinder extends Circle {
    double h;

    Cylinder(double r, double h) {
        super(r);
        this.h = h;
    }

    void display() {
        super.area();

        System.out.println(
            "Cylinder Area = " +
            2 * Math.PI * r * (r + h));
    }
}

class Main {
    public static void main(String[] args) {

        Cylinder c = new Cylinder(5, 10);

        c.display();
    }
}
```

## Q2 — Product Minimum Price

```java
import java.util.*;

class Product {
    int id;
    String name;
    double price;

    void accept() {
        Scanner sc = new Scanner(System.in);

        System.out.print("ID: ");
        id = sc.nextInt();

        System.out.print("Name: ");
        name = sc.next();

        System.out.print("Price: ");
        price = sc.nextDouble();
    }

    public static void main(String[] args) {

        Product p[] = new Product[5];

        for (int i = 0; i < 5; i++) {
            p[i] = new Product();
            p[i].accept();
        }

        Product min = p[0];

        for (int i = 1; i < 5; i++) {
            if (p[i].price < min.price)
                min = p[i];
        }

        System.out.println(
            "Minimum Price Product = " + min.name);
    }
}
```

---

# Slip 22

## Q1 — Prime Numbers using BufferedReader

```java
import java.io.*;

class Prime {
    public static void main(String[] args) throws Exception {

        BufferedReader br =
            new BufferedReader(new InputStreamReader(System.in));

        System.out.print("Enter number: ");
        int n = Integer.parseInt(br.readLine());

        for (int i = 2; i <= n; i++) {

            boolean prime = true;

            for (int j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    prime = false;
                    break;
                }
            }

            if (prime)
                System.out.print(i + " ");
        }
    }
}
```

## Q2 — LinkedList Strings

```java
import java.util.*;

class StringList {
    public static void main(String[] args) {

        LinkedList<String> list =
            new LinkedList<>();

        list.add("Red");
        list.add("Blue");
        list.add("Green");

        list.addLast("Yellow");

        list.removeFirst();

        System.out.println("Reverse:");

        ListIterator<String> it =
            list.listIterator(list.size());

        while (it.hasPrevious())
            System.out.println(it.previous());
    }
}
```

---

# Slip 23

## Q1 — Cylinder and Circle

```java
class Circle {
    double r;

    Circle(double r) {
        this.r = r;
    }

    void area() {
        System.out.println(
            "Circle Area = " + Math.PI * r * r);
    }
}

class Cylinder extends Circle {
    double h;

    Cylinder(double r, double h) {
        super(r);
        this.h = h;
    }

    void display() {
        super.area();

        System.out.println(
            "Cylinder Area = " +
            2 * Math.PI * r * (r + h));
    }
}

class Main {
    public static void main(String[] args) {
        Cylinder c = new Cylinder(5, 10);
        c.display();
    }
}
```

## Q2 — Traffic Signal using Runnable

```java
class Traffic implements Runnable {

    public void run() {
        try {
            System.out.println("RED");
            Thread.sleep(2000);

            System.out.println("YELLOW");
            Thread.sleep(1000);

            System.out.println("GREEN");
        }
        catch (Exception e) {
            System.out.println(e);
        }
    }

    public static void main(String[] args) {

        Traffic t = new Traffic();

        Thread th = new Thread(t);

        th.start();
    }
}
```

---

# Slip 24

## Q1 — Cities Descending Order

```java
import java.util.*;

class Cities {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter n: ");
        int n = sc.nextInt();

        String city[] = new String[n];

        for (int i = 0; i < n; i++)
            city[i] = sc.next();

        Arrays.sort(city, Collections.reverseOrder());

        for (String c : city)
            System.out.println(c);
    }
}
```

## Q2 — Student Names with Iterator/ListIterator

```java
import java.util.*;

class Students {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        ArrayList<String> list =
            new ArrayList<>();

        System.out.print("Enter n: ");
        int n = sc.nextInt();

        for (int i = 0; i < n; i++)
            list.add(sc.next());

        System.out.println("Using Iterator:");

        Iterator<String> it = list.iterator();

        while (it.hasNext())
            System.out.println(it.next());

        System.out.println("Using ListIterator:");

        ListIterator<String> li =
            list.listIterator();

        while (li.hasNext())
            System.out.println(li.next());
    }
}
```

---

# Slip 25

## Q1 — Reverse Number

```java
class Reverse {
    public static void main(String[] args) {

        int n = Integer.parseInt(args[0]);
        int rev = 0;

        while (n != 0) {
            int digit = n % 10;
            rev = rev * 10 + digit;
            n = n / 10;
        }

        System.out.println("Reverse = " + rev);
    }
}
```

## Q2 — File F1 → F2 → F3

```java
import java.io.*;

class FileCopy {
    public static void main(String[] args) throws Exception {

        FileReader fr =
            new FileReader("F1.txt");

        FileWriter fw =
            new FileWriter("F2.txt");

        int ch;

        while ((ch = fr.read()) != -1) {
            fw.write(Character.toUpperCase((char) ch));
        }

        fr.close();
        fw.close();

        FileReader f1 =
            new FileReader("F1.txt");

        FileReader f2 =
            new FileReader("F2.txt");

        FileWriter f3 =
            new FileWriter("F3.txt");

        while ((ch = f1.read()) != -1)
            f3.write(ch);

        while ((ch = f2.read()) != -1)
            f3.write(ch);

        f1.close();
        f2.close();
        f3.close();

        System.out.println("Files created successfully.");
    }
}
```

---

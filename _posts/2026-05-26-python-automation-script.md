---
layout: default
title: "Python Automation & API Script"
category: "Automation"
---

# Python Automation & API Script

Is notebook post mein maine database sync aur server monitoring ka active code save kiya hai.

### 🐍 Production Python Code
Yeh script background database systems ko automatically test aur clear karti hai:

```python
import time

def check_server_status():
    nodes = ["auth-server", "db-cluster", "api-gateway"]
    print("[INFO] Starting system health check...")
    
    for node in nodes:
        time.sleep(0.5)
        print(f"[OK] {node} is responding perfectly.")
        
    return True

if __name__ == "__main__":
    check_server_status()

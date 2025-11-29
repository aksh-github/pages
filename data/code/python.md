## Python Virtual Environments (venv)

A Python virtual environment is a self-contained directory that contains a Python interpreter and a set of packages, allowing you to isolate your project's dependencies from the system Python environment.

**Key Benefits:**

Isolation: Manage dependencies for multiple projects without conflicts
Portability: Easily replicate environments across different machines
Version Management: Use different Python versions for different projects

Common Commands:

Linux / Mac (use python3 etc.)

```

python -m venv myenv: Create a new virtual environment
source myenv/bin/activate: Activate the environment (Linux/Mac)

```

Windows

```
python -m venv myproject
myproject\Scripts\activate
```

**Pacakge Install**

```
pip install package_name    #: Install packages

OR

pip install -r requirements.txt
```

考虑经典的 $k$ 维布尔域线性空间：
+ 值域 $V = [0, 2^k) \cap \Z$；
+ $A \subseteq V$ 是 $V$ 中若干整数构成的集合；
+ $\operatorname{span} A = \{\oplus_{a \in A'} a \;|\; A' \subseteq A\}$ 是 $A$ 张成的 $V$ 的子空间；
+ 对于 $x \in V$，记 $f_A(x) = \min_{a \in \operatorname{span} A} \{ x\oplus a \}$ 是 $x$ 选取 $A$ 中若干整数异或后可得到的最小值。

我们指出以下事实：
> 对于任意 $A$，$f_A$ 是 $V$ 上的线性变换。更具体地，$f_A$ 是投影变换。

> **证**　考虑贪心求 $f_A(x)$ 的过程。贪心求出的 $A$ 的极大线性无关组 $B$ 是 $\operatorname{span} A$ 的一组最高位互不相同的基。补充 $\{2^i \;|\; 0\leq i < k\}$ 将 $B$ 扩充为 $V$ 的一组最高位互不相同的基 $B'$，则贪心求 $f_A(x)$ 的过程相当于将 $x$ 向 $B' \backslash B$ 上投影。因此 $f_A$ 作为投影变换是 $V$ 上的线性变换。$\square$

这直接给出了以下性质：
> 对任意 $x, y\in V$，有 $f_A(x\oplus y) = f_A(x) \oplus f_A(y)$。

---

**应用**　给定带权无向图 $G$，求 $G$ 中任意两点间异或最短路的长度和。

对于图 $G$ 的连通块 $V'$，其 cycle space 的一组基给出了集合 $A$。任选连通块中一点 $t \in V'$，对于任意点 $u \in V'$，记 $t$ 经过任意一条路径到 $u$ 的异或边权和为 $p_u$，则连通块对答案的贡献为：
$$
\sum_{u \in V'} \sum_{v \in V'} f_A(p_u \oplus p_v) = \sum_{u \in V'} \sum_{v \in V'} f_A(p_u) \oplus f_A(p_v)
$$

后者的计算是显然的，按位考虑即可。
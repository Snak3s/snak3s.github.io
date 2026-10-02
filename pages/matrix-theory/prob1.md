# 线性空间引论 习题

**题 1.1**　设 Hermite 矩阵 $A = \begin{bmatrix} 1 & 1+\mathrm{i} & \mathrm{i} \\ 1-\mathrm{i} & 5 & 0 \\ -\mathrm{i} & 0 & 2 \end{bmatrix}$，则矩阵 $A$ 为 $\underline{\qquad}$ （正定 / 半正定 / 不定 / 半负定）Hermite 矩阵．

> **解**　首先，$|\alpha x_1 + \beta x_2|^2$ 可以展开为复二次型
>
> $$
> |\alpha x_1 + \beta x_2|^2 =
> \begin{bmatrix}\overline{x_1} & \overline{x_2}\end{bmatrix}
> \begin{bmatrix}
> |\alpha|^2 & \overline{\alpha}\beta \\
> \alpha\overline{\beta} & |\beta|^2
> \end{bmatrix}
> \begin{bmatrix}x_1 \\ x_2\end{bmatrix}
> $$
>
> 设 $\boldsymbol{x} = [x_1, x_2, x_3]^\mathsf{T}$，可得
>
> $$
> \begin{aligned}
> f(\boldsymbol{x}) &= \boldsymbol{x}^\mathsf{H} A \boldsymbol{x} \\
> &= \left|{1\over \sqrt 2}x_1 + \sqrt 2(1+\mathrm{i})x_2\right|^2 + \left|{1\over \sqrt 2}x_1 + \sqrt 2\mathrm{i} x_3\right|^2 + |x_2|^2 \\
> &\geq 0
> \end{aligned}
> $$
>
> 并且当且仅当 $\boldsymbol{x} = \boldsymbol{0}$ 时有 $f(\boldsymbol{x})=0$，因此 $A$ 为$\boxed{\text{正定 Hermite 阵}}$． $\square$

另一种复杂的方法是计算特征值．

> **解**　计算可得
>
> $$
> \begin{aligned}
> \varphi_A(\lambda) &= \det (\lambda I - A) \\
> &= \begin{vmatrix} \lambda-1 & -1-\mathrm{i} & -\mathrm{i} \\ -1+\mathrm{i} & \lambda-5 & 0 \\ \mathrm{i} & 0 & \lambda-2 \end{vmatrix} \\
> &= \mathrm{i} \begin{vmatrix} -1-\mathrm{i} & -\mathrm{i} \\ \lambda-5 & 0 \end{vmatrix} + (\lambda-2) \begin{vmatrix} \lambda-1 & -1-\mathrm{i} \\ -1+\mathrm{i} & \lambda-5 \end{vmatrix} \\
> &= -(\lambda - 5) + (\lambda - 2)(\lambda - 1)(\lambda - 5) - 2(\lambda - 2) \\
> &= \lambda^3 - 8\lambda^2 + 14\lambda - 1
> \end{aligned}
> $$
>
> 代入可得 $\varphi_A(0) = -1$，$\varphi_A'(\lambda) = 3\lambda^2 - 16\lambda+ 14$ 在 $(-\infty, 0]$ 上恒正，可知 $\varphi_A(\lambda)$ 无负根，$A$ 的特征值全为正，$A$ 为$\boxed{\text{正定 Hermite 阵}}$． $\square$

&nbsp;

**题 1.2**　已知 $A = \begin{bmatrix}1 & 0 \\ 2 & 1\end{bmatrix}$ 和集合 $S_A = \left\{ \sum_{i=0}^{10^3}\alpha_iA^i \,\middle|\, \alpha_i\in\mathbb{R}, i=1,\dots,10^3 \right\}$，则 $S_A$ $\underline{\qquad}$ （是 / 不是）$\mathbb{R}$ 上的线性空间．若 $S_A$ 是 $\mathbb{R}$ 上的线性空间，则 $\dim S_A = $ $\underline{\qquad}$．

> **解**　计算可得
>
> $$
> \varphi_A(\lambda) = |\lambda I - A| = \begin{vmatrix}\lambda - 1 & 0 \\ -2 & \lambda - 1\end{vmatrix} = (\lambda - 1)^2
> $$
>
> 因此 $A^2 - 2A + I = 0$，这说明 $A^2$ 以及 $A$ 的更高次幂可由 $I$ 与 $A$ 线性表出．在 $\mathbb{R}$ 上，$\{I, A\}$ 是 $S_A$ 的一组基，因此 $\boxed{\dim S_A = 2}$． $\square$

&nbsp;

**题 1.3**　已知 $A \in \mathbb{C}^{5\times 5}$，$\operatorname{rank} A = 3$，则子空间 $S_A = \left\{ B \in \mathbb{C}^{5\times 5} \,\middle|\, AB = O \right\}$ 的维数是$\underline{\qquad}$．

> **解**　注意 $B = [B_1, \dots, B_5] \in \mathbb{C}^{5\times 5}$，$B$ 的各列 $B_i$ 是齐次线性方程组 $AX=0$ 的解，$B_i$ 作为解空间维数为 $5 - 3 = 2$，因此 $B$ 的维数为 $2\times 5 = \boxed{10}$． $\square$

&nbsp;

**题 1.4**　设 $V = \left\{ X \in \mathbb{R}^{10\times 10} \,\middle|\, X\boldsymbol{a} = 0, \boldsymbol{a} = [1, \dots, 1]^\mathsf{T} \right\}$，则 $V$ 的维数是$\underline{\qquad}$．

> **解**　令 $A = [\boldsymbol{a}, \boldsymbol{0}, \dots, \boldsymbol{0}] \in \mathbb{R}^{10\times 10}$，则 $X\boldsymbol{a} = 0 \iff XA = O \iff A^\mathsf{T} X^\mathsf{T} = O$．又因为 $\operatorname{rank} A^\mathsf{T} = 1$，$X^\mathsf{T}$ 的各列是 $A^\mathsf{T} Y = 0$ 的解，因此 $X^\mathsf{T}_i$ 维数为 $10 - 1 = 9$，$X$ 的维数为 $9\times 10 = \boxed{90}$． $\square$

&nbsp;

**题 1.5**　若矩阵 $A\in \mathbb{C}^{n\times n}$，则下列说法错误的是：

1. 若 $A^2 = A$，则 $R(I-A) = N(A)$．
2. 若 $R(I-A) = N(A)$，则 $A^2 = A$．
3. 若 $A^2 = A$，则 $R(A) \dotplus N(A) = \mathbb{C}^n$．
4. 若 $R(A) \dotplus N(A) = \mathbb{C}^n$，则 $A^2 = A$．

> **解**　$\boxed{\text{(4)}}$．首先 $A^2 = A \iff A(I-A) = O$．
>
> 1. $A(I-A) = O$ 等价于 $I-A$ 的各列是 $A\boldsymbol{x} = 0$ 的解，因此 $R(I-A) \subseteq N(A)$．又 $\operatorname{rank}(I-A) + \operatorname{rank} A \geq \operatorname{rank} I = n \iff \operatorname{rank}(I-A) \geq n - \operatorname{rank} A \iff \dim R(I-A) \geq \dim N(A)$，从而 $R(I-A) = N(A)$．
> 2. $R(I-A) = N(A)$ 说明 $I-A$ 的各列是 $A\boldsymbol{x} = 0$ 的解，从而 $A(I-A) = O$，$A^2 = A$．
> 3. $A^2 = A \implies \operatorname{rank} A^2 = \operatorname{rank} A$，所以不存在 $\boldsymbol{0}\neq \boldsymbol{x} \in R(A)$ 使得 $A\boldsymbol{x} = \boldsymbol{0}$，从而 $R(A)\cap N(A) = \left\{ \boldsymbol{0} \right\}$，结合 $\dim R(A) + \dim N(A) = n$ 可得 $R(A) \dotplus N(A) = \mathbb{C}^n$．
> 4. $R(A) \dotplus N(A) = \mathbb{C}^n \implies \operatorname{rank} A^2 = \operatorname{rank} A$，并不能得到 $A^2 = A$． $\square$

&nbsp;

**题 1.6**　若 $A \in \mathbb{C}^{m\times n}$ 且 $\operatorname{rank} A = r$，非齐次线性方程组 $Ax = b$ 有特解 $x = \xi$，其解集记为 $V$，则下列说法正确的是：

1. $\dim V = r + 1$．
2. $V$ 中极大线性无关组向量的个数是 $n - r + 1$．
3. $\dim V = n - r + 1$．
4. $V$ 中极大线性无关组向量的个数是 $n - r$．

> **解**　$\boxed{\text{(2)}}$．由于 $0 \notin V$，因此 $V$ 不是线性空间，不存在维度．齐次线性方程组 $Ax = 0$ 的解集 $V'$ 构成 $n-r$ 维线性空间，取 $V'$ 的一组基 $\left\{ \alpha_1, \dots, \alpha_{n-r} \right\}$，$\left\{ \xi, \xi + \alpha_1, \dots, \xi + \alpha_{n-r} \right\}$ 构成 $V$ 的极大线性无关组，秩为 $n - r + 1$． $\square$

&nbsp;

**题 1.7**　设 $U, W$ 是内积空间 $V$ 的两个子空间，则以下正确的是：

1. $(U + W)^\perp = U^\perp + W^\perp$
2. $(U + W)^\perp = U^\perp \cap W^\perp$
3. $(U \cap W)^\perp = U^\perp \cap W^\perp$
4. $(U \cap W)^\perp = U + W$

> **解**　$\boxed{\text{(2)}}$．首先可以得到 $(U+W)^\perp = U^\perp \cap W^\perp$．
>
> - $U \subseteq U + W \implies U \perp (U+W)^\perp \implies (U+W)^\perp \subseteq U^\perp$，对 $W$ 同理，于是 $(U+W)^\perp \subseteq U^\perp \cap W^\perp$．
>
> - $\forall x \in U^\perp \cap W^\perp$，有 $x\perp U$ 且 $x\perp W$，于是 $x\perp U+W$，$U^\perp \cap W^\perp \subseteq (U+W)^\perp$．
>
> 上式两侧同时取正交补有 $U+W = (U^\perp \cap W^\perp)^\perp$，令 $U' = U^\perp, W' = W^\perp$ 即得 $U'^\perp + W'^\perp = (U' \cap W')^\perp$． $\square$

&nbsp;

**题 1.8**　以下集合对所给运算组成 $\mathbb{R}$ 上线性空间的是：

1. 次数等于 $m$（$m\geq 1$）的实系数多项式的集合，关于多项式的往常加法和数与多项式的往常乘法．
2. Hermite 矩阵的集合，关于矩阵的加法和实数与矩阵的乘法．
3. 平面上全体向量的集合，关于通常的向量加法和以下定义的数乘运算 $k\cdot x = x_0$，$k$ 是实数，$x_0$ 是某一取定向量．
4. 幂等矩阵（满足 $A^2 = A$ 的矩阵 $A$）的集合，关于矩阵的往常加法和实数与矩阵的往常乘法．

> **解**　$\boxed{\text{(2)}}$．(1) 缺少零元．(3) 不满足数乘运算的条件．(4) $I + I$ 不是幂等的，不封闭． $\square$

&nbsp;

**题 1.9**　设 $A\in \mathbb{C}^{n\times n}$ 且满足 $A^2 = A$，则以下说法不正确的是：

1. $R(A) + R(I-A)$ 是直和．
2. $R(I-A) = N(A)$．
3. $R(A) \perp N(A)$．
4. $\dim R(I-A) = n - \operatorname{rank} A$．

> **解**　$\boxed{\text{(3)}}$．根据题 1.5 可知 (1) (2) (4) 正确．(3) 应为 $R(A^\mathsf{H}) \perp N(A)$． $\square$

&nbsp;

**题 1.10**　以下说法正确的是：

1. 若两向量正交，则这两向量必线性无关．
2. 在实线性空间的子空间中，向量 $\boldsymbol{1}$ 可被定义为空间的零向量．
3. 在欧几里得空间 $\mathbb{R}$ 中，向量 $\boldsymbol{1}$ 的长度为 $1$．
4. 在 $n$ 维线性空间中，一定存在一组标准正交基．

> **解**　$\boxed{\text{(2)}}$．(1) 考虑零向量．(3) 取决于内积如何定义．(4) 线性空间不一定配备内积． $\square$

&nbsp;

**题 1.11**　设 $V_1 = \left\{ \boldsymbol{x} = [x_1, \dots, x_n]^\mathsf{T} \in \mathbb{C}^n \,\middle|\, x_1 + \dots + x_n = 0 \right\}$，$V_2 = \left\{ \boldsymbol{x} = [x_1, \dots, x_n]^\mathsf{T} \in \mathbb{C}^n \,\middle|\, x_1 = \dots x_n \right\}$，则 $V_1 + V_2$ 的维数为$\underline{\qquad}$．

> **解**　容易验证 $V_1\cap V_2 = \left\{ \boldsymbol{0} \right\}$，$\dim V_1 = n - 1$，$\dim V_2 = 1$，因此 $\dim (V_1 + V_2) = \dim V_1 + \dim V_2 = \boxed{n}$． $\square$

&nbsp;

**题 1.12**　在欧几里得空间 $V$ 中，设 $W$ 是 $V$ 的线性子空间，$\boldsymbol{\alpha} \in V$ 为给定向量，则 $\boldsymbol{\alpha}$ 在 $W$ 上的最佳逼近就是 $\boldsymbol{\alpha}$ 在 $W$ 上的正交投影．请根据这一结论判断以下说法正确的是：（多选）

1. 向量 $\boldsymbol{\alpha}$ 在 $W$ 上的最佳逼近存在但可能不唯一．
2. 若 $V = \mathbb{R}^3$，$\boldsymbol{\alpha} = [\alpha_1, \alpha_2, \alpha_3]^\mathsf{T}$，则 $\boldsymbol{\alpha}$ 在 $xOy$ 平面上的最佳逼近为 $[\alpha_1, \alpha_2, 0]^\mathsf{T}$．
3. 若 $V = \mathbb{R}^3$，$\boldsymbol{\alpha} = [\alpha_1, \alpha_2, \alpha_3]^\mathsf{T}$，则 $\boldsymbol{\alpha}$ 在 $x$ 轴上的最佳逼近为 $[\alpha_1, 0, 0]^\mathsf{T}$．
4. 若非零向量 $\alpha$ 在 $W$ 上的正交投影为零向量，则 $\alpha\perp W$．

> **解**　$\boxed{\text{(2)(3)(4)}}$． $\square$

&nbsp;

**题 1.13**　给定向量 $x = [1, 2, 3]^\mathsf{T}$ 和线性子空间 $W = \operatorname{span}(x_1, x_2)$，其中 $x_1 = [2, 5, -1]^\mathsf{T}, x_2 = [-2, 1, 1]^\mathsf{T}$，则以下说法正确的是：（多选）

1. 向量 $x = [1,2,3]^\mathsf{T}$ 在 $W$ 的正交投影为 $[-{2\over 5}, 1, {1\over 5}]^\mathsf{T}$．
2. 向量 $x$ 与该向量在 $W$ 的正交投影之间的夹角为 $\arccos {11\over\sqrt{420}}$．
3. $W^\perp = \operatorname{span}\left\{ x_3 \right\}$，其中 $x_3 = [2,0,4]^\mathsf{T}$．
4. $x$ 在 $W^\perp$ 的正交投影为 $[{7\over 5}, 0, {14\over 5}]^\mathsf{T}$．

> **解**　首先注意到 $(x_1, x_2) = 0$，$x_1 \perp x_2$．不妨先来验证 (3)，容易计算得到 $(x_1, x_3) = 0$ 且 $(x_2, x_3) = 0$，这说明 (3) 正确，从而 $x$ 在 $W^\perp$ 的正交投影为
>
> $$
> {(x, x_3)\over (x_3, x_3)} x_3 = {14 \over 20}x_3 = \left[{7\over 5}, 0, {14\over 5}\right]^\mathsf{T}
> $$
>
> 所以 (4) 正确．简单计算得到
>
> $$
> \text{Proj}_{W}x = x - \text{Proj}_{W^\perp}x = \left[-{2\over 5}, 2, {1\over 5}\right]^\mathsf{T}
> $$
>
> $$
> \cos \langle x, \text{Proj}_W x \rangle = {(x, \text{Proj}_W x) \over \Vert x\Vert \cdot \Vert\text{Proj}_W x\Vert} = {\sqrt{30} \over 10}
> $$
>
> 所以 (1)(2) 错误．答案为 $\boxed{\text{(3)(4)}}$． $\square$

&nbsp;

**题 1.14**　设 $V_1, V_2$ 是 $V$ 的两个线性子空间，则与命题“$V_1 + V_2$ 的任意元素的分解式唯一”等价的命题是：（多选）

1. $V_1 \cap V_2 = \left\{ 0 \right\}$．
2. $\dim (V_1 + V_2) = \dim V_1 + \dim V_2$．
3. $V_1 + V_2$ 的零元素的分解式唯一．
4. $V_1 + V_2 = V$．

> **解**　$\boxed{\text{(1)(2)(3)}}$． $\square$

&nbsp;

**题 1.15**　设 $V$ 是所有次数小于 $n$（$n>1$）的实系数多项式组成的线性空间，$U = \left\{ f(x)\in V \,\middle|\, f(1)=0 \right\}$，$W = \left\{ f(X)\in V \,\middle|\, f(2)=0 \right\}$，则下述叙述正确的是：（多选）

1. $\dim U = \dim W = n - 1$
2. $U + W = V$
3. $\dim(U+W) = n$
4. $V = U\oplus W$

> **解**　$\boxed{\text{(1)(2)(3)}}$．不妨设
>
> $$
> f(x) = \sum_{i=0}^{n-1}f_ix^i = [x^0, \dots, x^{n-1}]\begin{bmatrix}f_0 \\ \vdots \\ f_{n-1}\end{bmatrix} = \boldsymbol{x}\boldsymbol{f}
> $$
>
> 那么 $U$ 对应 $\boldsymbol{x}_1\boldsymbol{f} = [1^0, \dots, 1^{n-1}]\boldsymbol{f} = 0$ 的解集，$W$ 对应 $\boldsymbol{x}_2\boldsymbol{f} = [2^0, \dots, 2^{n-1}]\boldsymbol{f} = 0$ 的解集，显然 $\dim U = \dim W = n - 1$．$U\cap W$ 对应 $\begin{bmatrix}\boldsymbol{x}_1 \\ \boldsymbol{x}_2\end{bmatrix}\boldsymbol{f} = 0$ 的解集，$\boldsymbol{x}_1$ 与 $\boldsymbol{x}_2$ 线性无关，所以系数矩阵的秩为 2，$\dim (U\cap W) = n - 2$，依维数定理有 $\dim(U+W) = \dim U + \dim W - \dim(U\cap W) = n$，结合 $\dim V = n$ 即知 $U+W=V$．$V = U\oplus W$ 成立当且仅当 $n=2$ 时成立． $\square$

&nbsp;

**题 1.16**　设 $A$ 是实对称矩阵，则下面命题与 $A$ 是正定矩阵等价的命题有：（多选）

1. $A$ 的所有主子式都大于 $0$．
2. $A$ 半正定，且 $|A| \neq 0$．
3. 对任意方阵 $P$，$P^\mathsf{T} AP$ 正定．
4. 存在正定矩阵 $B$ 使得 $A = B^2$．

> **解**　$\boxed{\text{(1)(2)(4)}}$．$A\in \mathbb{R}^{n\times n}$ 正定（简记为 $A>0$），当且仅当对于任意 $0\neq x=[x_1,\dots,x_n]\in \mathbb{R}^n$ 均有 $x^\mathsf{T} A x > 0$．$A$ 的特征值均为正，$\det A$ 为 $A$ 所有特征值的乘积也为正．
>
> 1. 选取下标 $i_1, \dots, i_k$，令 $j \notin \left\{ i_1, \dots, i_k \right\}$ 的 $x_j=0$，仍然满足 $x^\mathsf{T} A x > 0$，因此 $S$ 的由第 $i_1, \dots, i_k$ 行和第 $i_1, \dots, i_k$ 列交叉位置构成的子方阵正定，对应主子式 $S\begin{pmatrix}i_1&\cdots&i_k\\i_1&\cdots&i_k\end{pmatrix} > 0$．反之，可得顺序主子式均为正，从而 $A>0$．
> 2. $A$ 半正定说明 $A$ 的所有特征值非负，由于 $\det A$ 作为 $A$ 所有特征值的乘积不为 $0$，因此 $A$ 所有特征值均为正，$A>0$．
> 3. 令 $P=O$ 即知不成立．事实上需要 $P$ 可逆，从而 $P^\mathsf{T} AP$ 与 $A$ 相合．
> 4. 首先存在正交矩阵 $Q$ 使得 $Q^\mathsf{T} A Q = \operatorname{diag}(\lambda_1, \dots, \lambda_n) = D \iff A = QDQ^\mathsf{T}$，其中 $\lambda_1,\dots,\lambda_n$ 为 $A$ 的全部特征值．置 $B = Q\operatorname{diag}(\sqrt{\lambda_1}, \dots, \sqrt{\lambda_n})Q^\mathsf{T}$ 即有 $B^2 = Q\sqrt D Q^\mathsf{T} Q\sqrt D Q^\mathsf{T} = Q\sqrt D\sqrt D Q^\mathsf{T} = QDQ^\mathsf{T} = A$． $\square$

&nbsp;

**题 1.17**　设 $V$ 是数域 $\mathbb{F}$ 上的线性空间，则以下说法正确的是：（多选）

1. $V$ 中零向量唯一．
2. $V$ 中任一向量的负元是唯一的，且不等于它本身．
3. $V$ 中一定有无穷个向量．
4. 设 $k\in \mathbb{F}$，$\alpha\in V$，且 $k\alpha$ 为零向量，则 $k=0$ 或 $\alpha=0$．

> **解**　$\boxed{\text{(1)(4)}}$．(2) 考虑 $0$．(3) 考虑 $\left\{ 0 \right\}$． $\square$

&nbsp;

**题 1.18**　设 $A\in \mathbb{C}^{m\times n}$，则以下说法正确的是：

1. $R(A)$ 和 $N(A)$ 可能相等．
2. $\dim N(A) = m - \operatorname{rank} A$．
3. 若 $\dim N(A)=0$，则 $A$ 为列满秩矩阵．
4. $R(A)$ 和 $N(A)$ 的零向量相同．

> **解**　$\boxed{\text{(1)(3)}}$．对于 (1)，给出一个 $R(A) = N(A)$ 的例子：$A = \begin{bmatrix}0&0\\1&0\end{bmatrix}$．(2) 应为 $\dim N(A) = n - \operatorname{rank} A$．(4) $R(A)$ 与 $N(A)$ 中的向量维数不一定相同． $\square$

&nbsp;

**题 1.19**　设 $A\in\mathbb{R}^{n\times n}$，若在 $\mathbb{R}$ 上定义通常实矩阵的加法和数乘运算，则以下集合是实线性空间的是：（多选）

1. $\left\{ A \,\middle|\, \det A=0 \right\}$
2. $\left\{ A \,\middle|\, \operatorname{tr} A=0 \right\}$
3. $\left\{ A \,\middle|\, A\text{ 是上三角矩阵} \right\}$
4. $\left\{ A \,\middle|\, A=A^\mathsf{T} \right\}$

> **解**　$\boxed{\text{(2)(3)(4)}}$．(1) $\det A=\det B=0$ 不一定有 $\det(A+B)=0$． $\square$

&nbsp;

**题 1.20**　定义 $W_1, W_2, W_3$．$W_1$ 是所有形如 $[a-3b, b-a, a, b]$ 的向量的集合，其中 $a, b$ 为任意实数．$W_2 = \left\{ X\in\mathbb{R}^{2\times 2} \,\middle|\, AX=XA, A=\operatorname{diag}(1, 2) \right\}$，$W_3 = \left\{ \begin{bmatrix}a&b&0\\c&0&d\end{bmatrix} \,\middle|\, a+b+c=0, a,b,c,d\in\mathbb{R} \right\}$．则以下说法正确的是：

1. $W_1, W_2, W_3$ 均为实线性空间，且三个空间的维数均不相同．
2. $W_1, W_2, W_3$ 均为实线性空间，且三个空间的维数均相同．
3. $W_1, W_2, W_3$ 均为实线性空间，且有两个空间的维数相同．
4. $W_1, W_2$ 为实线性空间，且这两个空间的维数不相同．

> **解**　首先容易知道 $\dim W_1 = 2, \dim W_3=3$．对于 $W_2$，$AX=XA \implies \begin{bmatrix}x_{11}&x_{12}\\2x_{21}&2x_{22}\end{bmatrix} = \begin{bmatrix}x_{11}&2x_{12}\\x_{21}&2x_{22}\end{bmatrix}$，$X$ 非对角元为 $0$，$\dim W_2 = 2$．$\boxed{\text{(3)}}$． $\square$

&nbsp;

**题 1.21**　给定向量 $x = [1, 1, 1]^\mathsf{T}$，并设 $V = W_1 \dotplus W_2$，其中 $W_1 = \operatorname{span}\left\{ [1, 0, 1]^\mathsf{T} \right\}$，$W_2 = \left\{ [x_1, x_2, x_3]^\mathsf{T} \,\middle|\, x_3=0, \forall x_1, x_2\in\mathbb{R} \right\}$，则以下说法正确的是：（多选）

1. $W_1$ 与 $W_2$ 不正交，但 $W_1$ 中有无数个向量与 $W_2$ 正交．
2. $V = \mathbb{R}^3$．
3. $x$ 在 $W_2$ 上的投影为 $[0, 1, 0]^\mathsf{T}$．
4. $x$ 与 $W_1$ 中任意非零向量的夹角均为 $\arccos \sqrt{4\over 5}$．

> **解**　$\boxed{\text{(2)(3)}}$．不妨先设 $y = [1, 0, 1]^\mathsf{T}$．
>
> 1. 对于 $k\cdot y \in W_1$（$k\neq 0$），显然不与 $[1, 0, 0]^\mathsf{T} \in W_2$ 正交．
>
> 2. $\dim V = \dim W_1 + \dim W_2 = 1 + 2 = 3$，$V = \mathbb{R}^3$．
>
> 3. 注意到 $x - y = [0, 1, 0]^\mathsf{T} \in W_2$，所以 $x$ 在 $W_2$ 上的投影即为 $[0, 1, 0]^\mathsf{T}$．注意区分投影与正交投影．
>
> 4. 计算可知 $\cos \langle x, k\cdot y\rangle = \cos \langle x, y\rangle = {(x, y)\over \Vert x\Vert\cdot\Vert y\Vert} = {2\over \sqrt{6}}$． $\square$

&nbsp;

**题 1.22**　设 $V = \left\{ a\cos t + b\sin t \,\middle|\, a, b\in\mathbb{R} \right\}$．对任意 $f,g\in V$，定义 $(f, g) = f(0)g(0) + f({\pi\over 2})g({\pi\over 2})$，则以下说法正确的是：（多选）

1. $V$ 是二维实线性空间．
2. $V$ 是欧氏空间．
3. $h(t) = 3\cos t + 4\sin t$ 的长度为 $5$．
4. $\sin t, \cos t$ 是 $V$ 空间的一组标准正交基．

> **解**　$\boxed{\text{(1)(2)(3)(4)}}$． $\square$

&nbsp;

**题 1.23**　内积空间可定义不同的内积，由此导致向量的夹角也可能不同．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 1.24**　矩阵空间 $\mathbb{R}^{2\times 2}$ 的子集 $V=\left\{ X \in \mathbb{R}^{2\times 2} \,\middle|\, AXB=O, A,B\in\mathbb{R}^{2\times 2} \right\}$ 是 $\mathbb{R}^{2\times 2}$ 的子空间．

> **解**　$\boxed{\surd}$．设 $X_1, X_2 \in V$，$a, b\in \mathbb{R}$，有 $A(aX_1 + bX_2)B = aAX_1B + bAX_2B = O$，因此 $aX_1 + bX_2 \in V$． $\square$

&nbsp;

**题 1.25**　$\mathbb{R}^4$ 的子集 $V = \left\{ \alpha=[a_1, a_2, a_3, a_4] \,\middle|\, a_1+2a_2\cdot a_3=0 \right\}$ 是 $\mathbb{R}^4$ 的子空间．

> **解**　$\boxed{\times}$．显然 $e_2, e_3\in V$ 但 $e_2+e_3 \notin V$． $\square$

&nbsp;

**题 1.26**　设 $V = \left\{ X\in\mathbb{R}^{n\times n} \,\middle|\, Xa=0, a=[1,\dots,1]^\mathsf{T} \right\}$，则 $V$ 是 $\mathbb{R}^{n\times n}$ 的一个子空间，且它的维数是 $n^2-n$．

> **解**　$\boxed{\surd}$．见题 1.4． $\square$

&nbsp;

**题 1.27**　设 $A, B$ 均为 Hermite 半正定矩阵，若 $\operatorname{tr}(AB) = 0$，则 $AB=0$．

> **解**　$\boxed{\surd}$．由于 $A, B$ 半正定，因此存在半正定 Hermite 阵 $A^{1\over 2}, B^{1\over 2}$ 使得 $A = {A^{1\over 2}}^\mathsf{H} A^{1\over 2}, B = {B^{1\over 2}}^\mathsf{H} B^{1\over 2}$，从而
>
> $$
> \begin{aligned}
> 0 &= \operatorname{tr}(AB) \\
> &= \operatorname{tr}\left({A^{1\over 2}}^\mathsf{H} A^{1\over 2}{B^{1\over 2}}^\mathsf{H} B^{1\over 2}\right) \\
> &= \operatorname{tr}\left(B^{1\over 2}{A^{1\over 2}}^\mathsf{H} A^{1\over 2}{B^{1\over 2}}^\mathsf{H}\right) \\
> &= \operatorname{tr}\left(\left(A^{1\over 2}{B^{1\over 2}}^\mathsf{H}\right)^\mathsf{H}\left(A^{1\over 2}{B^{1\over 2}}^\mathsf{H}\right)\right)
> \end{aligned}
> $$
>
> > **定理 1.1**　对于任意矩阵 $A$ 有
> >
> > $$
> > \operatorname{tr}(A^\mathsf{H} A) = \sum_{i=1}^n\sum_{j=1}^n A^\mathsf{H}_{ij}A_{ji} = \sum_{i=1}^n\sum_{j=1}^n |A_{ij}|^2
> > $$
> >
> > 因此 $\operatorname{tr}(A^\mathsf{H} A) = 0 \implies A=O$．
>
> 利用以上结论可得 $A^{1\over 2}{B^{1\over 2}}^\mathsf{H} = O$，从而有 $AB = {A^{1\over 2}}^\mathsf{H} (A^{1\over 2}{B^{1\over 2}}^\mathsf{H}) B^{1\over 2} = {A^{1\over 2}}^\mathsf{H} O B^{1\over 2} = O$． $\square$

以下是另一种更加复杂的证明方法．（*草*）

> **解**　**第一步** 首先存在可逆阵 $P$ 使得
>
> $$
> P^\mathsf{H} A P = \operatorname{diag}(I_r, O_{n-r}) \implies A = (P^\mathsf{H})^{-1}\operatorname{diag}(I_r, O_{n-r})P^{-1}
> $$
>
> 方阵 $C = P^{-1} B (P^\mathsf{H})^{-1}$ 与 $B$ 相合，从而 $C$ 半正定．现在有
>
> $$
> AB = (P^\mathsf{H})^{-1}\operatorname{diag}(I_r, O_{n-r})P^{-1} PCP^\mathsf{H} = (P^\mathsf{H})^{-1}\operatorname{diag}(I_r, O_{n-r})CP^\mathsf{H}
> $$
>
> 所以 $AB$ 与 $D = \operatorname{diag}(I_r, O_{n-r})C$ 相似．
>
> **第二步** 先将 $C$ 分块有
>
> $$
> C = \begin{bmatrix}C_{11} & C_{12} \\ C_{21} & C_{22}\end{bmatrix}
> $$
>
> 从而
>
> $$
> D = \operatorname{diag}(I_r, O_{n-r})C
> = \begin{bmatrix}I_r & \\ & O_{n-r}\end{bmatrix}\begin{bmatrix}C_{11} & C_{12} \\ C_{21} & C_{22}\end{bmatrix}
> = \begin{bmatrix}C_{11} & C_{12} \\ O_{(n-r)\times r} & O_{n-r} \end{bmatrix}
> $$
>
> 接下来证明 $\operatorname{rank} D = \operatorname{rank} C_{11}$，这等价于证明 $\operatorname{rank} D^\mathsf{H} = \operatorname{rank} C_{11}$．
>
> 令 $X = \begin{bmatrix}X_1 \\ X_2\end{bmatrix}$，考虑证明 $C_{11}X_1 = 0 \implies D^\mathsf{H} X=0$．由于
>
> $$
> D^\mathsf{H} X
> = \begin{bmatrix}C_{11} & O \\ C_{21} & O\end{bmatrix} \begin{bmatrix}X_1 \\ X_2\end{bmatrix}
> = \begin{bmatrix}C_{11} & O \\ C_{21} & O\end{bmatrix} \begin{bmatrix}X_1 \\ O\end{bmatrix}
> = \begin{bmatrix}C_{11} & C_{12} \\ C_{21} & C_{22}\end{bmatrix} \begin{bmatrix}X_1 \\ O\end{bmatrix}
> = C \begin{bmatrix}X_1 \\ O\end{bmatrix}
> $$
>
> 不失一般性地，仅考虑 $X_2=O$ 的情形．可以得到
>
> $$
> C_{11}X_1 = 0 \implies X_1^\mathsf{H} C_{11} X_1 = 0 \implies \begin{bmatrix}X_1^\mathsf{H} & O\end{bmatrix}C\begin{bmatrix}X_1\\O\end{bmatrix} = 0
> $$
>
> 接下来证明以下定理：
>
> > **定理 1.2**　对于半正定 Hermite 阵 $A$，$X^\mathsf{H} A X = 0$ 与 $AX = 0$ 同解．
>
> 由于 $A$ 是 Hermite 阵，存在酉方阵 $U$ 使得 $B = U^\mathsf{H} A U = \operatorname{diag}(\lambda_1,\dots,\lambda_n)$，其中 $\lambda_1, \dots, \lambda_n$ 是 $A$ 的特征值．令 $Y = U^\mathsf{H} X$，由于 $\lambda_i$ 均非负，因此 $Y^\mathsf{H} B Y = 0$ 当且仅当 $\lambda_i\neq 0 \implies Y_i = 0$，此时 $U^\mathsf{H} AX = BY = 0$，$U^\mathsf{H}$ 满秩，从而 $AX = 0$．
>
> 利用此结论可知 $C\begin{bmatrix}X_1\\O\end{bmatrix} = D^\mathsf{H} X = 0$，因此 $\operatorname{rank} D = \operatorname{rank} C_{11}$．
>
> **第三步** $AB$ 可对角化等价于 $D = \operatorname{diag}(I_r, O_{n-r})C$ 可对角化．
>
> $C_{11}$ 是 Hermite 阵，因此可对角化．对于 $C_{11}$ 的属于特征值 $\lambda$ 的特征向量 $\alpha \in \mathbb{C}^r$，将其扩充为 $\alpha' = \begin{bmatrix}\alpha \\ O\end{bmatrix} \in \mathbb{C}^n$，容易验证 $D\alpha' = \lambda\alpha'$．这已经给出了属于非零特征值的 $\operatorname{rank} C_{11} = \operatorname{rank} D$ 个线性无关的特征向量．
>
> 考虑 $DX = 0$ 的解空间的一组基，这给出了属于特征值 $0$ 的 $n - \operatorname{rank} D$ 个线性无关的特征向量．从而 $D$ 可对角化，也即 $AB$ 可对角化．
>
> **第四步** 由于 $AB$ 可对角化，存在可逆阵 $Q$ 使得 $Q^{-1} AB Q$ 为对角阵，同时由于
>
> $$
> \operatorname{tr}(AB) = \operatorname{tr}(ABQQ^{-1}) = \operatorname{tr}(Q^{-1}ABQ) = 0
> $$
>
> 这说明对角阵 $Q^{-1}ABQ = O$，从而 $AB = O$． $\square$

&nbsp;

**题 1.28**　$n$ 阶实数矩阵 $A$ 构成的实系数矩阵多项式，对于矩阵的加法以及实数与矩阵的乘法构成实数域上的线性空间．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 1.29**　对于 $\begin{bmatrix}0&a\\-a&b\end{bmatrix}$ 的全体二阶方阵，对于矩阵的加法以及实数与矩阵的乘法构成实数域上的线性空间．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 1.30**　$x^2+2x, x^2-2x, x+4$ 是多项式 $P_2(x)$ 的一组基．

> **解**　$\boxed{\surd}$．$x^2 = {(x^2 + 2x) + (x^2 - 2x)\over 2}$，$x = {(x^2 + 2x) - x^2 \over 2}$，$1 = {(x+4) - x \over 4}$． $\square$

&nbsp;

**题 1.31**　任一复方阵都可以唯一地表示成 Hermite 矩阵和反 Hermite 矩阵之和．

> **解**　$\boxed{\surd}$．对于 $A \in \mathbb{C}^{n\times n}$ 有 $A = {A + A^\mathsf{H} \over 2} + {A - A^\mathsf{H} \over 2}$．若存在 Hermite 阵 $X \neq {A + A^\mathsf{H} \over 2}$ 与反 Hermite 阵 $Y \neq {A - A^\mathsf{H} \over 2}$ 使得 $A = X + Y$，则 $X - {A + A^\mathsf{H} \over 2} = {A - A^\mathsf{H} \over 2} - Y \neq O$，而等式左侧是 Hermite 阵，右侧是反 Hermite 阵，矛盾！所以分解方式是唯一的． $\square$

&nbsp;

**题 1.32**　设 $A$ 是复方阵，且 $\operatorname{rank} A = \operatorname{rank} A^2$，则 $R(A) + N(A)$ 是直和．

> **解**　$\boxed{\surd}$．见题 1.5． $\square$

&nbsp;

**题 1.33**　$R(A) = R(AB)$ 成立的充要条件是存在适当阶数的矩阵 $C$ 使得 $ABC = A$．

> **解**　$\boxed{\surd}$．对于 $B = [b_1, \dots, b_n]$ 的各列均有 $Ab_i \in R(A)$，所以 $R(AB) \subseteq R(A)$，同理 $R(ABC) \subseteq R(AB)$．若 $ABC = A$ 则有 $R(ABC) = R(AB) = R(A)$．若 $R(AB) = R(A)$ 则说明 $A$ 的各列均可被 $AB$ 的各列线性表出，将系数排成矩阵即知 $C$ 存在． $\square$

&nbsp;

**题 1.34**　已知 $A\in \mathbb{C}^{n\times n}$，$\operatorname{rank} A = r$，则子空间 $S_A = \left\{ B \in \mathbb{C}^{n\times n} \,\middle|\, AB=O \right\}$ 的维数是 $n-r$．

> **解**　$\boxed{\times}$．见题 1.4． $\square$

&nbsp;

**题 1.35**　已知 $A\in \mathbb{C}^{n\times n}$，$\operatorname{rank} A = r$，则子空间 $S_A = \left\{ B \in \mathbb{C}^{n\times n} \,\middle|\, AB=O \right\}$ 的维数是 $n(n-r)$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 1.36**　定义 $W = \left\{ A \in \mathbb{R}^{2\times 2} \,\middle|\, \operatorname{tr} A = 0 \right\}$，则 $W$ 是 $\mathbb{R}^{2\times 2}$ 的子空间．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 1.37**　$\mathbb{C}$ 作为 $\mathbb{R}$ 上的一个二维线性空间，则一定存在一个内积使得 $1$ 和 $1 + \mathrm{i}$ 构成 $\mathbb{C}$ 的一组标准正交基．

> **解**　$\boxed{\surd}$．考虑将 $a+b\mathrm{i}$ 在 $1$ 与 $1 + \mathrm{i}$ 方向上分解有 $a+b\mathrm{i} = (a-b)\cdot 1 + b\cdot (1+\mathrm{i})$，于是可以定义内积
>
> $$
> (a+b\mathrm{i}, c+d\mathrm{i}) = (a-b)(c-d) + bd
> $$
>
> $\square$

&nbsp;

**题 1.38**　设 $A = \begin{bmatrix} 1 & \lambda & -1 \\ \lambda & 1 & -2 \\ -1 & -2 & 5 \end{bmatrix}$．若 $A$ 是实对称正定矩阵，则 $\lambda \in (0, 0.8)$．

> **解**　$\boxed{\surd}$．$A$ 正定 $\iff$ $A$ 的所有顺序主子式均为正，也即 $1-\lambda^2 > 0$ 且 $-5\lambda^2 + 4\lambda > 0$，解得 $\lambda \in (0, {4\over 5})$． $\square$

&nbsp;

**题 1.39**　集合 $V = \left\{ X \,\middle|\, AX = XA, X\in\mathbb{R}^{3\times 3} \right\}$，$A = \begin{bmatrix}1&1&0\\0&1&1\\0&0&1\end{bmatrix}$，则 $V$ 是 $\mathbb{R}$ 上的线性子空间，且 $\dim V = 4$．

> **解**　$\boxed{\times}$．注意到 $A = J_3(1)$ 为 Jordan 标准型，结合以下定理：
> > **定理 1.3**　与 Jordan 块 $J$ 可交换的矩阵有且仅有 $J$ 的多项式．
>
> 可知 $V$ 的一组基是 $\left\{ I, J, J^2 \right\}$，从而 $\dim V = 3$． $\square$

&nbsp;

**题 1.40**　向量空间 $\mathbb{R}^2$ 的子集 $V = \left\{ \alpha \,\middle|\, \alpha = [b, {1\over 2}b(b+1)], b\in\mathbb{R} \right\}$ 是 $\mathbb{R}^2$ 的子空间．

> **解**　$\boxed{\times}$． $\square$

&nbsp;

**题 1.41**　两个子空间的并集是线性空间．

> **解**　$\boxed{\times}$．不一定． $\square$

&nbsp;

**题 1.42**　设 $x_1, x_2, \dots, x_n$ 是欧几里得空间 $V$ 中的一组向量，$(x, y)$ 表示 $x$ 与 $y$ 的内积，令 $A = \begin{bmatrix}
(x_1, x_1) & \cdots & (x_1, x_n) \\
\vdots & \ddots & \vdots \\
(x_n, x_1) & \cdots & (x_n, x_n)
\end{bmatrix}$，则 $\det A\neq 0$ 的充要条件为向量 $x_1, \dots, x_n$ 线性无关．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 1.43**　线性空间 $V$ 中同一向量在不同基下的坐标一定不同．

> **解**　$\boxed{\times}$． $\square$

&nbsp;

**题 1.44**　在线性空间 $V$ 中，$\forall x, y\in V$，有 $|(x, y)|\leq \Vert x\Vert\Vert y\Vert$．

> **解**　$\boxed{\times}$．这即是 Cauchy–Schwarz 不等式，在内积空间中成立．但线性空间不一定配备了内积． $\square$

&nbsp;

**题 1.45**　集合 $V = \left\{ x \,\middle|\, x = [x_1, \dots, x_n], x_i\in \mathbb{C} \right\}$，则在通常的向量加法和数乘下，$V$ 构成 $\mathbb{R}$ 上的线性空间，且 $\dim V = n$．

> **解**　$\boxed{\times}$．$\dim V = 2n$． $\square$

&nbsp;

**题 1.46**　数域一定是复数域的子集．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 1.47**　给定线性空间的基不一定唯一，但各组基中向量个数一定是相等的．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 1.48**　某矩阵的零空间与列空间一定不等．

> **解**　$\boxed{\times}$．考察 $A = \begin{bmatrix}0&0\\1&0\end{bmatrix}$． $\square$

&nbsp;

**题 1.49**　设 $A\in \mathbb{C}^{n\times n}$，则 $A^{n-1}, \dots, A, I$ 一定线性无关．

> **解**　$\boxed{\times}$． $\square$

&nbsp;

**题 1.50**　设 $A\in \mathbb{C}^{n\times n}$，则 $A^n$ 一定可以由 $A^{n-1}, \dots, A, I$ 线性表示，其中 $n\geq 2$．

> **解**　$\boxed{\surd}$．特征多项式 $\varphi_A(\lambda) = |\lambda I - A|$ 是 $A$ 的零化多项式，令 $f(\lambda) = \varphi_A(\lambda) - \lambda^n$ 则有 $\deg f = n-1$ 且 $A^n = -f(A)$． $\square$

&nbsp;

**题 1.51**　设齐次线性方程组 $Ax=0$，其中 $A\in\mathbb{R}^{40\times 42}$，$x\in\mathbb{R}^{42}$．若该方程组的基础解系由两个线性无关的向量构成，则非齐次线性方程组 $Ax=b$ 一定有解．

> **解**　$\boxed{\surd}$．$b \in \mathbb{R}^{40}$，设 $Ax=0$ 解空间为 $W$，则 $\dim W=2$，$\operatorname{rank} A = 42 - \dim W = 40$，因此 $Ax=b$ 一定有解． $\square$

&nbsp;

**题 1.52**　在三维内积空间 $V$ 中，存在一个二维子空间 $W_1$ 和两个一维子空间 $W_2$ 和 $W_3$，使得这三个子空间相互正交．

> **解**　$\boxed{\times}$． $\square$

&nbsp;

**题 1.53**　设 $A\in\mathbb{R}^{m\times n}$，$b\in\mathbb{R}^m$，若非齐次线性方程组 $Ax=b$ 有解，则在 $R(A^\mathsf{T})$ 必有 $Ax=b$ 的解向量．

> **解**　$\boxed{\surd}$．设 $A = \begin{bmatrix}a_1\\\vdots\\a_m\end{bmatrix}$，则 $Ax = b \iff \begin{cases}(a_1, x) = b_1 \\ \qquad\vdots \\ (a_m, x) = b_m\end{cases}$，利用 Gram–Schmidt 正交化将 $\{a_1, \dots, a_m\}$ 化为标准正交基，可以根据内积确定唯一的 $b \in R(A^\mathsf{T})$． $\square$

&nbsp;

**题 1.54**　设 $A\in\mathbb{R}^{m\times n}$，$b\in\mathbb{R}^m$，若非齐次线性方程组 $Ax=b$ 有解，则在 $R(A^\mathsf{T})$ 只有 $Ax=b$ 的一个解向量．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 1.55**　设 $V = \mathbb{R}^{3\times 3}$ 是全体 $3$ 阶实方阵构成的线性空间，$U,W$ 是 $V$ 的两个子空间，其中 $U=\left\{ A\in V \,\middle|\, \operatorname{tr} A=0 \right\}$，$W=\left\{ A\in V \,\middle|\, A^\mathsf{T}+A=O \right\}$．则 $\dim U=8$，$\dim(U+W)=8$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 1.56**　设 $\mathbb{R}^4$ 的两个子空间为 $V_1=\left\{ \alpha=[a_1,a_2,a_3,a_4] \,\middle|\, a_1+2a_2+a_3=0 \right\}$，$V_2=\operatorname{span}(\beta_1,\beta_2)$，其中 $\beta_1=[0,1,1,1],\beta_2=[1,1,1,0]$，则 $\dim(V_1+V_2)=4$，$\dim(V_1\cap V_2)=1$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 1.57**　设 $A = \begin{bmatrix}1&a&1\\b+\mathrm{i}&0&b\\1&a-b&1\end{bmatrix}$ 是 Hermite 矩阵，则 $a=2\mathrm{i}, b=\mathrm{i}$．

> **解**　$\boxed{\times}$．$a=0, b=-\mathrm{i}$． $\square$

&nbsp;

**题 1.58**　设 $A, B\in\mathbb{C}^{n\times n}$，则 $\operatorname{tr}(AB^\mathsf{H})$ 可定义为 $\mathbb{C}^{n\times n}$ 的一个内积．

> **解**　$\boxed{\surd}$．注意到
>
> $$
> \operatorname{tr}(AB^\mathsf{H}) = \sum_{i=1}^n\sum_{j=1}^n A_{ij}B^\mathsf{H}_{ji} = \sum_{i=1}^n\sum_{j=1}^n A_{ij}\overline{B_{ij}}
> $$
>
> 这即是将方阵 $A, B$ 展平后 $\mathbb{C}^{n^2}$ 中的标准内积． $\square$

&nbsp;

**题 1.59**　设 $V_1 = \left\{ \begin{bmatrix}x&y\\x&y\end{bmatrix} \,\middle|\, x,y\in\mathbb{C} \right\}$，$V_2 = \left\{ \begin{bmatrix}x&y\\-y&-x\end{bmatrix} \,\middle|\, x,y\in\mathbb{C} \right\}$，则 $\dim(V_1\cap V_2)=1$，$\dim(V_1+V_2)=3$．

> **解**　$\boxed{\surd}$． $\square$
